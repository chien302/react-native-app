

import { View, Text, ScrollView, Image, TouchableOpacity, FlatList, SectionList } from 'react-native'
import React, { useState, useEffect, useContext } from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import SearchInput from '../../components/SearchInput'
import { ConfigColor } from '../../utils/ConfigColor'
import axiosClient from '../../api/axiosClient'
import authApi from '../../api/authApi'
import HandleAsyncStorage, { getStringData } from '../../utils/HandleAsyncStorage'
import userApi from '../../api/userApi'
import useDebouned from '../../hooks/useDebouned'
import chatApi from '../../api/chatApi'
import { SocketContext } from '../../contexts/SocketContext'
import * as Keychain from 'react-native-keychain';
// import { randomBytes } from 'react-native-randombytes'
// import { RSA, RSAKeychain } from 'react-native-rsa-native'
import CryptoJS from "react-native-crypto-js";
import moment from 'moment';


const MessengerScreen = ({ navigation }) => {
  const [searchText, setSearchText] = useState('')
  const [resultSearch, setResultSearch] = useState([])
  const [user, setUser] = useState({})
  const debouned = useDebouned(searchText, 500)
  const [listChat, setListChat] = useState([])
  // const [currentChatUser, setCurrentChatUser] = useState([])

  const { socket } = useContext(SocketContext)

  useEffect(() => {
    socket.on('hello', (data) => {
      console.log(data)
    })
  }, [])


  const handleOpenChat = async (userId) => {


    const res = await authApi.getChatByUserId({
      params: {
        userId: userId
      }
    })
    // console.log('chat')
    // console.log(res?.data)
    socket.emit("joinChat", res?.data?.chat?.id)
    navigation.push('ChatScreen', { currentChatUser: res?.data?.chat?.users, currentChat: res?.data?.chat })
  }


  useEffect(() => {
    const fetUser = async () => {
      const res = await authApi.getCurrentUser();
      if (res && res?.data?.user) {
        setUser(res.data.user)
      }

    }
    fetUser()
  }, [])

  const fetAllChat = async () => {
    const isKey = await Keychain.getGenericPassword()
    const res = await chatApi.getAllChat();
    console.log('res chats')
    console.log(res.data.chats[0].latestMessage.sender)
    let msgEn = res.data.chats[0].latestMessage.content
    if (msgEn) {
      const msgDecrypted = CryptoJS.AES.decrypt(msgEn, isKey.password).toString(CryptoJS.enc.Utf8)
      res.data.chats[0].latestMessage.content = msgDecrypted;
    }


    setListChat(res?.data?.chats)
    for (let chat of res?.data?.chats) {
      socket.emit('joinChat', chat?.id)
    }
  }
  useEffect(() => {
    fetAllChat()
  }, [])

  const handleOnChange = (text) => {
    setSearchText(text)
    if (searchText === '') {
      setResultSearch([])
    }
  }
  const handleSubmitSearch = async () => {
    if (searchText !== '') {
      const res = await userApi.searchUser({ searchValue: searchText })

      if (res && res?.data && res?.data?.users) {
        setResultSearch(res?.data?.users)
      }

    }
  }
  useEffect(() => {
    handleSubmitSearch()
  }, [debouned])
  const handleBackHome = () => {
    navigation.goBack()
  }
  const renderItem = ({ item, index }) => {
    return (
      <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }} onPress={() => handleOpenChat(item?.id)}>
        <Image style={{ height: 50, width: 50, borderRadius: 999, marginRight: 15, borderWidth: 1, borderColor: ConfigColor.GREY_SEMI }} source={{ uri: item?.avatar?.url }} />
        <View>
          <Text style={{ color: ConfigColor.BLACK, fontWeight: 500, fontSize: 16 }}>{item?.userName}</Text>

        </View>
      </TouchableOpacity>
    )
  }

  const renderListChat = ({ item, index }) => {
    const timestampString = item.latestMessage.createdAt;
    const date = new Date(timestampString);
    const hour = date.getHours();
    const dateFromMongo = moment(item.latestMessage.createdAt).toDate();
    const formattedDate = moment(dateFromMongo).format('h:mm a');
    return (
      <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }} onPress={() => handleOpenChat(item.users[0]?.id)}>
        <Image
          style={{ height: 50, width: 50, borderRadius: 999, marginRight: 15, borderWidth: 1, borderColor: ConfigColor.GREY_SEMI }}
          source={{ uri: item.users[0]?.avatar?.url }}
        />
        <View style={{ flexDirection: 'column', alignItems: 'flex-start' }}>
          <Text style={{ color: ConfigColor.BLACK, fontWeight: 500, fontSize: 16 }}>{item.users[0]?.userName}</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text style={{ color: ConfigColor.GREY, fontWeight: 350, fontSize: 14 }}> {item.latestMessage.content}</Text>

            <Text style={{ color: ConfigColor.GREY, fontWeight: 500, fontSize: 14, marginLeft: 150 }}>{formattedDate}</Text>
          </View>


        </View>
      </TouchableOpacity>
    )
  }
  return (
    <View  >
      <View style={{ flexDirection: 'row', paddingHorizontal: 15, paddingTop: 15, marginTop: 5 }}>
        <AntDesign name="arrowleft" color="black" size={26} onPress={handleBackHome} />
        <Text style={{ color: ConfigColor.BLACK, fontSize: 20, fontWeight: 'bold', marginLeft: 20 }}>{user?.userName}</Text>
      </View>
      <View>
        <SearchInput searchInputValue={searchText} onChangeSearchInputValue={(text) => handleOnChange(text)} onSubmitEditing={handleSubmitSearch} />
      </View>
      <View style={{ paddingHorizontal: 15 }}>
        <Text style={{ color: ConfigColor.BLACK, fontWeight: '600', fontSize: 16, paddingVertical: 10 }}>Tin nhắn</Text>

        {listChat.length === 0 && (
          <Text>Khong co tin nhan</Text>
        )}
        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
          {searchText !== '' && resultSearch.length > 0 ? (
            <FlatList data={resultSearch} renderItem={renderItem} keyExtractor={(item) => item?.id.toString()} />

          ) : (

            <View>
              <FlatList data={listChat} renderItem={renderListChat} keyExtractor={(item) => item?.id.toString()} />
            </View>
          )}
        </View>
      </View>
    </View >
  )
}

export default MessengerScreen
import { View, Text, Image, ScrollView, TextInput, TouchableOpacity, FlatList, NativeModules, SafeAreaView, Pressable } from 'react-native'
import React, { useContext, useEffect, useRef, useState } from 'react'
import { RSA, RSAKeychain } from 'react-native-rsa-native';
import AntDesign from 'react-native-vector-icons/AntDesign'
import Feather from 'react-native-vector-icons/Feather'
import Octicons from 'react-native-vector-icons/Octicons'
import { ConfigColor } from '../../utils/ConfigColor'
import InputBox from '../../components/InputBox'
import SearchInput from '../../components/SearchInput'
import chatApi from '../../api/chatApi'
import messageApi from '../../api/messageApi'
import { getStringData } from '../../utils/HandleAsyncStorage'
import Message from '../../components/Message'
import { AuthContext } from '../../contexts/AuthContext'
import { SocketContext } from '../../contexts/SocketContext';
import * as Keychain from 'react-native-keychain';
import { Decrypt, Encrypt } from '../../utils/ase';
import CryptoJS from "react-native-crypto-js";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import EmojiPicker from 'rn-emoji-keyboard'


const ChatScreen = ({ navigation, route }) => {
  const [message, setMessage] = useState('')
  const [userChat, setUserChat] = useState([])
  const [loading, setLoading] = useState(false)
  const [listMessage, setListMessage] = useState([])
  const [publicKey, setPublicKey] = useState(''); // Khóa công khai của người dùng hiện tại
  const [privateKey, setPrivateKey] = useState('');  // Khóa riêng tư của người dùng hiện tại
  const [partnerId, setPartnerId] = useState(''); // Id của người dùng đối tác
  const [partnerPublicKey, setPartnerPublicKey] = useState(''); // Khóa công khai của người dùng đối tác
  const [signature, setSignature] = useState(''); // Chữ ký số của tin nhắn
  const [verified, setVerified] = useState(false); // Trạng thái xác minh chữ ký số
  const [isShowIconSend, setIsShowIconSend] = useState(false)
  const [iOpen, setIsOpen] = useState(false)
  const { currentChatUser, currentChat } = route.params
  const { user } = useContext(AuthContext)
  const { socket } = useContext(SocketContext)
  const listRef = useRef()

  const handleGoBack = () => {
    navigation.goBack();
  }

  useEffect(() => {
    socket.on('hello', (data) => {
      console.log(data);
    })
    socket.on('notijoinchat', (data) => {
      // console.log('notijoinchat')
      // console.log(data);

    })
    socket.on('receiveMessage', async (data) => {
      // console.log('datareceiveMessage')

      // console.log(data)
      if (data?.key) {
        setPartnerPublicKey(data?.key);
        await Keychain.setGenericPassword('exchangeKey', data?.key);
      }

    })
  }, [route])

  const handleSendMessage = async () => {
    const key = 'chien@3010200202'
    await Keychain.setGenericPassword('exchangeKey', key);
    const isKey = await Keychain.getGenericPassword()
    if (message.trim() === '') return
    try {
      if (isKey.password) {
        const messageEncrypted = CryptoJS.AES.encrypt(message, isKey.password).toString();

        if (messageEncrypted) {
          const res = await messageApi.createMessage({ chatId: currentChat.id, message: messageEncrypted });

          const msgEnc = res?.data?.message?.content
          const messageDecrypted = CryptoJS.AES.decrypt(msgEnc, isKey.password).toString(CryptoJS.enc.Utf8)
          // console.log(messageDecrypted)
          if (!isKey.password) {
            socket.emit('sendMessage', res?.data?.message, currentChat.id, key)
          } else {
            socket.emit('sendMessage', res?.data?.message, currentChat.id)
          }
          setListMessage((prev) => [...prev, {
            ...res?.data?.message,
            content: messageDecrypted,
          },])
        }

      }
    } catch (error) { }
    setMessage('')
  }

  const fetMessageByChatId = async () => {
    const isKey = await Keychain.getGenericPassword()

    try {
      const res = await messageApi.getMessageByChatId({
        params: {
          chatId: currentChat?.id,
        },
      });
      let listMessage = res?.data?.messages
      listMessage = listMessage.reverse()
      // console.log('listMessage')
      // console.log(listMessage)

      listMessage = listMessage.map((msg) => {
        if (isKey.password) {
          const msgDecrypted = CryptoJS.AES.decrypt(msg?.content, isKey.password).toString(CryptoJS.enc.Utf8)
          return { ...msg, content: msgDecrypted };
        }
      })
      setListMessage((prev) => [...listMessage, ...prev])
    } catch (error) {
      console.error(error);
    }
  };

  const handleScrollToBottom = () => {
    if (listRef && listRef.current) {
      listRef.current.scrollTop = listRef.current.scrollHeight + 10000
    }
  }

  useEffect(() => {
    fetMessageByChatId()
  }, [currentChat?.id])
  // console.log('listMessage')
  // console.log(listMessage)


  const handleChangeMessage = (text) => {
    setMessage(text)
    if (text.length > 0) {
      setIsShowIconSend(true)
    } else {
      setIsShowIconSend(false)
    }
  }
  const handleOpenSticker = () => {
    setIsOpen(true)
  }


  const handlePick = (emojiObject) => {
    console.log(emojiObject)
    setMessage(message + emojiObject.emoji)

  }

  // useEffect(() => {
  //   // Scroll to the bottom when the component mounts
  //   listRef.current.scrollToEnd({ animated: true });
  // }, []);

  // console.log(user?.id === message?.sender?.id)
  const renderListMessage = ({ item, index }) => {
    return user?.id === item?.sender?.id ? (
      (
        <View key={index} style={{ marginBottom: 10 }}>

          <View style={{
            flexDirection: 'row',
            justifyContent: 'flex-end',
          }}>

            <Text
              style={{ fontSize: 16, color: ConfigColor.BLACK, paddingHorizontal: 10, paddingVertical: 7, backgroundColor: ConfigColor.BUTTON, color: ConfigColor.WHITE, borderRadius: 20 }}
            >
              {item?.content}
            </Text>
          </View>

        </View>
      )
    ) : (
      (
        <View style={{ marginBottom: 10 }}>

          <View style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
            <Image style={{ height: 30, width: 30, borderRadius: 999, marginRight: 10 }} src={item?.sender?.avatar?.url} />
            <Text
              style={{ fontSize: 16, color: ConfigColor.BLACK, paddingHorizontal: 10, paddingVertical: 7, backgroundColor: ConfigColor.GREY_NORMAL, color: ConfigColor.BLACK, borderRadius: 20 }}
            >
              {item?.content}
            </Text>
          </View>

        </View>
      )
    )
  }


  return loading === true ? (
    <View>
      <Text>Loading...</Text>
    </View>
  ) : (
    <View style={{ position: 'relative', flex: 1, height: '100%' }}>
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingVertical: 10, paddingHorizontal: 15 }}>
        <AntDesign name="arrowleft" color="black" size={26} onPress={handleGoBack} />
        <View style={{ flexDirection: 'row', alignItems: 'center', flex: 2, marginLeft: 15 }}>
          {currentChatUser?.length > 0 && (
            <Image style={{ height: 30, width: 30, borderRadius: 999, marginRight: 10 }} src={currentChatUser[0]?.avatar?.url} />
          )}
          {currentChatUser?.length > 0 && (
            <Text style={{ color: ConfigColor.BLACK, marginTop: 13 }}>{currentChatUser[0].userName}</Text>
          )}
        </View>
        <View>
          <Octicons name="device-camera-video" color="black" size={24} />
        </View>
      </View>
      {listMessage.length > 0 && (
        <SafeAreaView style={{ flex: 1 }}>
          <FlatList
            scrollEnabled={true}
            ref={listRef}
            style={{ paddingHorizontal: 15 }}
            data={listMessage}
            renderItem={renderListMessage}
            keyExtractor={(item) => item?.id.toString()}
            onContentSizeChange={() => listRef.current.scrollToEnd({ animated: true })}
          />


        </SafeAreaView>

      )}
      <View style={{
        position: 'absolute', bottom: 15, width: '100%', paddingHorizontal: 15, marginTop: 15, paddingTop: 10,
        flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',
        borderRadius: 30
      }}>
        <TextInput
          placeholderTextColor={ConfigColor.BLACK}
          placeholder='Nhắn tin'
          style={{ fontSize: 20, width: '100%', paddingHorizontal: 15, paddingVertical: 16, backgroundColor: ConfigColor.GREY_NORMAL, borderRadius: 25, color: ConfigColor.BLACK }}
          value={message}
          onChangeText={(text) => handleChangeMessage(text)}
        />
        <View style={{ position: 'absolute', right: 30, flexDirection: 'row', alignItems: 'center', bottom: 16 }}>


          <Pressable onPress={handleOpenSticker}>

            <MaterialCommunityIcons name='sticker-emoji' color={ConfigColor.BLACK} size={22} />


          </Pressable>
          <View style={{ marginLeft: 15 }}>
            <TouchableOpacity onPress={handleSendMessage}>
              <Feather name='send' size={22} color={ConfigColor.BLACK} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      {iOpen && (
        <View>
          <EmojiPicker
            onEmojiSelected={handlePick}
            open={iOpen}
            onClose={() => setIsOpen(false)}
          />
        </View>
      )}

    </View>
  )
}

export default ChatScreen


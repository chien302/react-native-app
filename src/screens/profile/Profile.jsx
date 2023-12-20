import { View, Text, Image, ScrollView, TouchableOpacity, FlatList, Pressable } from 'react-native'
import React, { useContext, useEffect, useRef, useState } from 'react'
import RBSheet from "react-native-raw-bottom-sheet";

import { ConfigColor } from '../../utils/ConfigColor'
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/FontAwesome';

import CustomButton from '../../components/CustomButton';
import authApi from '../../api/authApi';
import userApi from '../../api/userApi';
import { removeStringData } from '../../utils/HandleAsyncStorage';
import HandleAuthToken from '../../utils/HandleAuthToken';
import { AuthContext } from '../../contexts/AuthContext';

const Profile = ({ navigation }) => {
  const refRBSheet = useRef();
  const [user, setUser] = useState({})
  const [listFriendSuggest, setListFriendSuggest] = useState([])
  const { dispatch } = useContext(AuthContext)
  useEffect(() => {
    const fetUser = async () => {
      const res = await authApi.getCurrentUser()
      console.log('curr usser')
      console.log(res.data)
      const listFriendSuggest = await userApi.getListFriendSuggestion()
      // console.log('listFriendSuggest')
      // console.log(listFriendSuggest?.data)
      if (res && res?.data && res?.data?.user) {
        setUser(res?.data?.user)
      }
      if (listFriendSuggest && listFriendSuggest?.data && listFriendSuggest?.data?.users) {
        setListFriendSuggest(listFriendSuggest?.data?.users)
      }
    }
    fetUser()
  }, [])

  const handleSignOut = async () => {
    dispatch({ type: 'LOGOUT' })
    await removeStringData('authUserId')
    await removeStringData('accessToken')
    HandleAuthToken()
    navigation.push('Login')

  }

  const renderItem = ({ item, index }) => {
    return (
      <View style={{
        width: 150,
        flexDirection: 'column',
        alignItems: 'center',
        marginRight: 15,
        padding: 10,
        borderWidth: 1,
        borderColor: ConfigColor.GREY_SEMI,
        borderRadius: 10,
        position: 'relative',
      }}>
        <Image
          style={{
            width: 90,
            height: 90,
            borderColor: ConfigColor.GREY_SEMI,
            borderWidth: 1,
            borderRadius: 500
          }}
          source={{ uri: item?.avatar?.url }} />
        <Text style={{ color: ConfigColor.BLACK, fontWeight: 'bold', fontSize: 13, marginTop: 5 }}>{item?.fullName}</Text>
        <Text style={{ color: ConfigColor.GREY, paddingBottom: 60 }}>Gợi ý cho bạn</Text>
        <CustomButton style={{ position: 'absolute', height: 45, padding: 0, bottom: 10 }} title={'Theo dõi'} />
      </View>
    )
  }

  return (
    <ScrollView>
      <View style={{ marginHorizontal: 10, marginTop: 15 }}>
        <View
          style={{
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'space-between'
          }}>
          <Text
            style={{ color: ConfigColor.BLACK, fontSize: 24, fontWeight: 'bold' }}
          >
            {user.userName}
          </Text>
          <Ionicons
            name="menu-outline" size={28}
            color='black' onPress={() => refRBSheet.current.open()}
          />
        </View>
        <View
          style={{ marginTop: 15, justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center' }}>
          <View>
            <Image
              style={{ width: 90, height: 90, borderColor: ConfigColor.GREY_SEMI, borderWidth: 1, borderRadius: 500 }}
              src={user?.avatar?.url}
            />
            <Text style={{ color: ConfigColor.BLACK, fontSize: 13, fontWeight: 'bold', marginTop: 5 }}>{user.fullName}</Text>
          </View>
          <View
            style={{ justifyContent: 'space-between', flexDirection: 'row', marginLeft: 20 }}>
            <View
              style={{ flexDirection: 'column', alignItems: 'center' }}
            >
              <Text
                style={{ color: ConfigColor.BLACK, fontSize: 14, fontWeight: 'bold' }}>8</Text>
              <Text ellipsizeMode='tail' numberOfLines={1}
                style={{ color: ConfigColor.BLACK, fontSize: 14 }}>Bài viết</Text>
            </View>
            <View
              style={{ flexDirection: 'column', alignItems: 'center', marginHorizontal: 10 }}>
              <Text
                style={{ color: ConfigColor.BLACK, fontSize: 14, fontWeight: 'bold' }}>120</Text>
              <Text
                style={{ color: ConfigColor.BLACK, fontSize: 14 }}>Người the...</Text>
            </View>
            <View
              style={{ flexDirection: 'column', alignItems: 'center' }}>
              <Text
                style={{ color: ConfigColor.BLACK, fontSize: 14, fontWeight: 'bold' }}>54</Text>
              <Text
                style={{ color: ConfigColor.BLACK, fontSize: 14 }}>Đang the...</Text>
            </View>
          </View>
        </View>

        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15, justifyContent: 'space-between' }}>
          <TouchableOpacity
            style={{
              paddingHorizontal: 6,
              paddingVertical: 8,
              backgroundColor: ConfigColor.GREY_NORMAL,
              borderRadius: 10,
              borderWidth: 1,
              borderColor: ConfigColor.GREY_SEMI
            }}
            onPress={() => navigation.push('UpdateProfile')}
          >
            <Text style={{ color: ConfigColor.BLACK, fontWeight: 'bold' }}>Chỉnh sửa trang cá nhân</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              paddingHorizontal: 6,
              paddingVertical: 8,
              backgroundColor: ConfigColor.GREY_NORMAL,
              borderRadius: 10,
              marginLeft: 10,
              borderWidth: 1,
              borderColor: ConfigColor.GREY_SEMI
            }}>
            <Text style={{ color: ConfigColor.BLACK, fontWeight: 'bold' }}>Chia sẻ trang cá nhân</Text>
          </TouchableOpacity>
        </View>

        <View style={{ marginTop: 25 }}>
          <View
            style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 15 }}
          >
            <Text
              style={{ color: ConfigColor.BLACK, fontSize: 14, fontWeight: 600 }}
            >
              Khám phá mọi người
            </Text>
            <Text
              style={{ color: ConfigColor.BUTTON, fontSize: 13, fontWeight: 600 }}

            >
              Xem tất cả
            </Text>
          </View>

          <FlatList horizontal={true} style={{}} data={listFriendSuggest} renderItem={renderItem} keyExtractor={item => item?.id.toString()} />

        </View>

      </View >
      <View style={{ marginTop: 50 }}>
        <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
          <Image
            style={{ flex: 1, flexBasis: 0.3, height: 100, marginRight: 1, marginLeft: 1 }}
            source={require("../../assets/imgs/i1.png")}
          />
          <Image
            style={{ flex: 1, flexBasis: 0.3, height: 100, marginRight: 1, marginLeft: 1 }}
            source={require("../../assets/imgs/i2.png")}
          />
          <Image
            style={{ flex: 1, flexBasis: 0.3, height: 100, marginRight: 1, marginLeft: 1 }}
            source={require("../../assets/imgs/i3.png")}
          />
        </View>
        <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginTop: 1 }}>
          <Image
            style={{ flex: 1, flexBasis: 0.3, height: 100, marginRight: 1, marginLeft: 1 }}
            source={require("../../assets/imgs/i6.png")}
          />
          <Image
            style={{ flex: 1, flexBasis: 0.3, height: 100, marginRight: 1, marginLeft: 1 }}
            source={require("../../assets/imgs/i7.png")}
          />
          <Image
            style={{ flex: 1, flexBasis: 0.3, height: 100, marginRight: 1, marginLeft: 1 }}
            source={require("../../assets/imgs/i9.png")}
          />
        </View>
      </View>
      <RBSheet
        ref={refRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={false}
        customStyles={{
          wrapper: {
            backgroundColor: "transparent"
          },
          draggableIcon: {
            backgroundColor: "#000"
          }
        }}
      >
        <View style={{ marginTop: 15 }}>
          <View style={{ marginHorizontal: 20 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text style={{ fontSize: 16, marginBottom: 20, color: ConfigColor.BLACK }}>Đổi thông tin</Text>
              <Icons name='angle-right' color='black' size={24} />
            </View>
            <Pressable style={{ flexDirection: 'row', justifyContent: 'space-between' }} onPress={handleSignOut}>
              <Text style={{ fontSize: 16, marginBottom: 20, color: ConfigColor.BLACK }}>Đăng xuất</Text>
              <Icons name='angle-right' color='black' size={24} />
            </Pressable>
          </View>

        </View>
      </RBSheet>
    </ScrollView >
  )
}

export default Profile
import { View, Text, ScrollView, Image, Pressable, TextInput } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Octicons from 'react-native-vector-icons/Octicons'
import Feather from 'react-native-vector-icons/Feather'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { ConfigColor } from '../../utils/ConfigColor';
import InputBox from '../../components/InputBox';
import authApi from '../../api/authApi';
import { SocketContext } from '../../contexts/SocketContext';




const HomeScreen = ({ navigation }) => {
  const [user, setUser] = useState({})
  const { socket } = useContext(SocketContext)
  const handleRedirectMessenger = () => {
    navigation.push('MessengerScreen')
  }

  useEffect(() => {
    socket.on('hello', (data) => {
      console.log(data)
    })
  }, [])

  useEffect(() => {
    const fetUser = async () => {
      const res = await authApi.getCurrentUser()
      // console.log('profile')
      // console.log(res?.data)
      if (res && res?.data && res?.data?.user) {
        setUser(res?.data?.user)
      }
    }
    fetUser()
  }, [])
  return (
    <ScrollView>
      <View style={{
        borderBottomWidth: 1,
        borderBottomColor: ConfigColor.GREY_NORMAL,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 15, paddingHorizontal: 12
      }}
      >
        <Text style={{ color: ConfigColor.BLACK, fontSize: 24, fontWeight: 'bold' }}>𝙲𝚘𝚗𝚗𝚎𝚌𝚝𝚉𝚘𝚗𝚎</Text>
        <View style={{ flexDirection: 'row' }}>
          <FontAwesome name='heart' color='black' size={20} />
          <View style={{ marginHorizontal: 7 }}></View>
          <Fontisto name='messenger' color='black' size={20} onPress={handleRedirectMessenger} />
        </View>
      </View>
      <ScrollView horizontal={true}>
        <View style={{ marginLeft: 12, flexDirection: 'row', alignItems: 'center', marginTop: 15 }}>
          <Pressable style={{ position: 'relative', flexDirection: 'column', alignItems: 'center' }}>
            <Image
              style={{ height: 84, width: 84, borderRadius: 999, objectFit: 'cover', borderWidth: 1, borderColor: ConfigColor.GREY_SEMI }}
              source={require("../../assets/imgs/i5.png")} src={user?.avatar?.url}
            />
            <View style={{ position: 'absolute', bottom: 22, right: 0 }}>
              <AntDesign name='pluscircle' size={24} color={ConfigColor.BUTTON} />
            </View>
            <Text style={{ color: ConfigColor.BLACK, fontSize: 12 }}>Tin của bạn</Text>
          </Pressable>
          <View style={{ marginLeft: 15, flexDirection: 'row' }}>
            <Pressable style={{ flexDirection: 'column', alignItems: 'center', marginRight: 15 }}>
              <View style={{ height: 88, width: 88, borderRadius: 999, objectFit: 'cover', borderWidth: 2, borderColor: 'pink' }}>
                <Image
                  style={{ height: 84, width: 84, borderRadius: 999, objectFit: 'cover', borderWidth: 2, borderColor: 'white' }}
                  source={require("../../assets/imgs/i6.png")}
                />
              </View>
              <Text style={{ color: ConfigColor.BLACK, fontSize: 12 }}>messi</Text>
            </Pressable>
            <Pressable style={{ flexDirection: 'column', alignItems: 'center', marginRight: 15 }}>
              <View style={{ height: 88, width: 88, borderRadius: 999, objectFit: 'cover', borderWidth: 2, borderColor: 'pink' }}>
                <Image
                  style={{ height: 84, width: 84, borderRadius: 999, objectFit: 'cover', borderWidth: 2, borderColor: 'white' }}
                  source={require("../../assets/imgs/i7.png")}
                />
              </View>
              <Text style={{ color: ConfigColor.BLACK, fontSize: 12 }}>cristiano</Text>
            </Pressable>
            <Pressable style={{ flexDirection: 'column', alignItems: 'center', marginRight: 15 }}>
              <View style={{ height: 88, width: 88, borderRadius: 999, objectFit: 'cover', borderWidth: 2, borderColor: 'pink' }}>
                <Image
                  style={{ height: 84, width: 84, borderRadius: 999, objectFit: 'cover', borderWidth: 2, borderColor: 'white' }}
                  source={require("../../assets/imgs/i8.png")}
                />
              </View>
              <Text style={{ color: ConfigColor.BLACK, fontSize: 12 }}>phuongly</Text>
            </Pressable>
            <Pressable style={{ flexDirection: 'column', alignItems: 'center', marginRight: 15 }}>
              <View style={{ height: 88, width: 88, borderRadius: 999, objectFit: 'cover', borderWidth: 2, borderColor: 'pink' }}>
                <Image
                  style={{ height: 84, width: 84, borderRadius: 999, objectFit: 'cover', borderWidth: 2, borderColor: 'white' }}
                  source={require("../../assets/imgs/i9.png")}
                />
              </View>
              <Text style={{ color: ConfigColor.BLACK, fontSize: 12 }}>sontungmtp</Text>
            </Pressable>


          </View>
        </View>
      </ScrollView>
      <View style={{ marginTop: 10 }}>
        <View style={{ marginTop: 15, marginBottom: 10 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 12 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Image style={{ height: 35, width: 35, borderRadius: 999, objectFit: 'cover' }} source={require("../../assets/imgs/i4.png")} />
              <Text style={{ color: ConfigColor.BLACK, fontSize: 14, fontWeight: '500', marginLeft: 10 }}>den.vau</Text>
            </View>
            <MaterialCommunityIcons name="dots-vertical" size={20} color={ConfigColor.GREY} />
          </View>
          <Image style={{ width: 'full', height: 200, objectFit: 'cover', marginTop: 10 }} source={require("../../assets/imgs/i3.png")} />
          <View style={{ paddingHorizontal: 12 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10, marginBottom: 5 }}>
              <Octicons name='heart' size={20} color='black' />
              <Fontisto name='comment' size={20} color='black' style={{ marginLeft: 20, marginRight: 20 }} />
              <Feather name='send' size={20} color='black' />
            </View>
            <Text style={{ color: ConfigColor.BLACK, fontSize: 14, fontWeight: '600' }}>Có messi và những người khác thích</Text>
          </View>
          <View style={{ paddingHorizontal: 12, flexDirection: 'row' }}>
            <Text style={{ color: ConfigColor.BLACK, fontSize: 12, fontWeight: 'bold', marginRight: 5 }}>den.vau</Text>
            <Text style={{ color: ConfigColor.BLACK, fontSize: 12 }}>hello da nang</Text>
          </View>
          <View style={{ marginHorizontal: 12, paddingVertical: 5, flexDirection: 'row', alignItems: 'center' }}>
            <Image
              style={{ height: 25, width: 25, borderRadius: 999, objectFit: 'cover', borderWidth: 1, borderColor: ConfigColor.GREY_SEMI, marginRight: 5 }}
              source={require("../../assets/imgs/i5.png")}
            />
            <TextInput
              placeholderTextColor={ConfigColor.GREY}
              style={{ padding: 0, color: ConfigColor.GREY }}
              placeholder='Thêm bình luận'
            />
          </View>
          <Text style={{ paddingHorizontal: 12, color: ConfigColor.GREY, fontSize: 12 }}>1 ngày trước</Text>
        </View>

        <View style={{ marginTop: 15, marginBottom: 10 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 12 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Image style={{ height: 35, width: 35, borderRadius: 999, objectFit: 'cover' }} source={require("../../assets/imgs/i8.png")} />
              <Text style={{ color: ConfigColor.BLACK, fontSize: 14, fontWeight: '500', marginLeft: 10 }}>songtungmtp</Text>
            </View>
            <MaterialCommunityIcons name="dots-vertical" size={20} color={ConfigColor.GREY} />
          </View>
          <Image style={{ width: 'full', height: 200, objectFit: 'cover', marginTop: 10 }} source={require("../../assets/imgs/i9.png")} />
          <View style={{ paddingHorizontal: 12 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10, marginBottom: 5 }}>
              <Octicons name='heart' size={20} color='black' />
              <Fontisto name='comment' size={20} color='black' style={{ marginLeft: 20, marginRight: 20 }} />
              <Feather name='send' size={20} color='black' />
            </View>
            <Text style={{ color: ConfigColor.BLACK, fontSize: 14, fontWeight: '600' }}>Có phuongly và những người khác thích</Text>
          </View>
          <View style={{ paddingHorizontal: 12, flexDirection: 'row' }}>
            <Text style={{ color: ConfigColor.BLACK, fontSize: 12, fontWeight: 'bold', marginRight: 5 }}>sontungmtp</Text>
            <Text style={{ color: ConfigColor.BLACK, fontSize: 12 }}>#makingmyway</Text>
          </View>
          <View style={{ marginHorizontal: 12, paddingVertical: 5, flexDirection: 'row', alignItems: 'center' }}>
            <Image
              style={{ height: 25, width: 25, borderRadius: 999, objectFit: 'cover', borderWidth: 1, borderColor: ConfigColor.GREY_SEMI, marginRight: 5 }}
              source={require("../../assets/imgs/i5.png")}
            />
            <TextInput
              placeholderTextColor={ConfigColor.GREY}
              style={{ padding: 0, color: ConfigColor.GREY }}
              placeholder='Thêm bình luận'
            />
          </View>
          <Text style={{ paddingHorizontal: 12, color: ConfigColor.GREY, fontSize: 12 }}>4 ngày trước</Text>
        </View>








      </View>
    </ScrollView>
  )
}

export default HomeScreen
import { View, Text, Image, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { ConfigColor } from '../../utils/ConfigColor'
import InputBox from '../../components/InputBox'

const UpdateProfile = ({ navigation }) => {
  const handleBackHome = () => {
    navigation.goBack()
  }
  return (
    <View style={{ paddingHorizontal: 10, paddingVertical: 15 }}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <AntDesign name="arrowleft" color="black" size={22} onPress={handleBackHome} style={{ marginTop: 2 }} />
        <Text style={{ color: ConfigColor.BLACK, marginLeft: 15, fontSize: 18, fontWeight: 'bold' }}>Chỉnh sửa trang cá nhân</Text>
      </View>
      <View style={{ flexDirection: 'column', alignItems: 'center', marginTop: 15 }}>
        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15 }}>
          <Image style={{ width: 80, height: 80, borderRadius: 999 }} source={require('../../assets/imgs/i7.png')} />
        </TouchableOpacity>
        <Text style={{ color: ConfigColor.BUTTON, fontWeight: 600, marginTop: 15 }}>Chỉnh sửa avatar</Text>
      </View>
      <View style={{ marginTop: 20 }}>
        <View style={{ marginBottom: 15 }}>
          <Text style={{ color: ConfigColor.GREY }}>Tên</Text>
          <TextInput
            style={{
              borderBottomWidth: 1,
              borderBottomColor: ConfigColor.GREY_SEMI,
              paddingVertical: 0
            }}
          />
        </View>

        <View style={{ marginBottom: 15 }}>
          <Text style={{ color: ConfigColor.GREY }}>Tên người dùng</Text>
          <TextInput
            style={{
              borderBottomWidth: 1,
              borderBottomColor: ConfigColor.GREY_SEMI,
              paddingVertical: 0
            }}
          />
        </View>

        <View style={{ marginBottom: 15 }}>
          <Text style={{ color: ConfigColor.GREY }}>Tiểu sử</Text>
          <TextInput
            style={{
              borderBottomWidth: 1,
              borderBottomColor: ConfigColor.GREY_SEMI,
              paddingVertical: 0
            }}
          />
        </View>
        <View style={{ marginBottom: 15 }}>
          <Text style={{ color: ConfigColor.GREY }}>Giới tính</Text>
          <TextInput
            style={{
              borderBottomWidth: 1,
              borderBottomColor: ConfigColor.GREY_SEMI,
              paddingVertical: 0
            }}
          />
        </View>
      </View>
    </View>
  )
}

export default UpdateProfile
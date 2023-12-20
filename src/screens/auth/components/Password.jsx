import { View, Text } from 'react-native'
import { useState } from 'react'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Ionicons from 'react-native-vector-icons/Ionicons'
import InputBox from '../../../components/InputBox'
import CustomButton from '../../../components/CustomButton'
import { ConfigColor } from '../../../utils/ConfigColor'


const Password = ({ navigation }) => {
  const [password, setPassword] = useState('')
  const NextPageBirthday = () => {
    navigation.push('CreateBirthday', { password })
  }
  const handleBackHome = () => {
    navigation.goBack()
  }

  return (
    <View style={{ width: '100%', paddingHorizontal: 10, paddingVertical: 20 }}>
      <AntDesign name="arrowleft" color="black" size={22} onPress={handleBackHome} style={{ paddingBottom: 10 }} />
      <Text style={{ color: ConfigColor.BLACK, fontSize: 22, fontWeight: 'bold', paddingBottom: 8 }}>Tạo mật khẩu</Text>
      <Text style={{ color: ConfigColor.GREY, marginBottom: 15 }}>Tạo mật khẩu có ít nhất 8 kí tự bao gồm chữ cái và số, viết hoa. Bạn nên chọn mật khẩu thạt khó khó đoán</Text>
      <InputBox placeholder={'Mật khẩu'} value={password} secureTextEntry={true} onChangeText={(password) => setPassword(password)} />
      <CustomButton style={{ height: 50 }} title={'Tiếp'} onPress={NextPageBirthday} />

    </View>
  )
}

export default Password
import { View, Text } from 'react-native'
import { useState } from 'react'
import React from 'react'
import InputBox from '../../../components/InputBox'
import CustomButton from '../../../components/CustomButton'
import { ConfigColor } from '../../../utils/ConfigColor'

const Password = ({ navigation }) => {
  const [password, setPassword] = useState('')
  const NextPageBirthday = () => {
    navigation.push('CreateBirthday')
  }

  return (
    <View style={{ paddingHorizontal: 30, paddingVertical: 20 }}>
      <Text style={{ color: ConfigColor.BLACK }}>Tạo mật khẩu</Text>
      <Text style={{ color: ConfigColor.BLACK, marginBottom: 15 }}>Tạo mật khẩu có ít nhất 8 kí tự bao gồm chữ cái và số, viết hoa. Tạo mật khẩu khó đoán</Text>
      <InputBox placeholder={'Mật khẩu'} value={password} secureTextEntry={true} onChangeText={(password) => setPassword(password)} />
      <CustomButton title={'Tiếp'} onPress={NextPageBirthday} />
    </View>
  )
}

export default Password
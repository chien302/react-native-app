import { View, Text } from 'react-native'
import React, { useState } from 'react'
import InputBox from '../../../components/InputBox'
import CustomButton from '../../../components/CustomButton'
import { ConfigColor } from '../../../utils/ConfigColor'

const Fullname = ({ navigation }) => {
  const [fullName, setFullName] = useState('')
  const NextPagePhoneNumber = () => {
    navigation.push('CreatePhoneNumber')
  }
  return (
    <View style={{ marginTop: 20, flex: 1, alignItems: 'center' }}>
      <View>
        <Text style={{ color: ConfigColor.BLACK, marginBottom: 10 }}>Tạo tên người dùng</Text>
        <InputBox placeholder={'Họ và tên'} value={fullName} onChangeText={(fullName) => setFullName(fullName)} />
      </View>
      <CustomButton title={'Tiếp'} onPress={NextPagePhoneNumber} />
    </View>
  )
}

export default Fullname
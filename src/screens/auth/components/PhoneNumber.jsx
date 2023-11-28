import { View, Text } from 'react-native'
import React, { useState } from 'react'
import InputBox from '../../../components/InputBox'
import CustomButton from '../../../components/CustomButton'
import { ConfigColor } from '../../../utils/ConfigColor'

const PhoneNumber = ({ navigation }) => {
  const [phoneNumber, setPhoneNumber] = useState('')
  const NextPageAvatar = () => {
    navigation.push('CreateAvatar')
  }
  return (
    <View style={{ marginTop: 20, flex: 1, alignItems: 'center' }}>
      <View>
        <Text style={{ color: ConfigColor.BLACK, marginBottom: 15 }}>Số điện thoại của bạn?</Text>
        <InputBox placeholder={'Số điện thoại'} value={phoneNumber} keyboardType={'numeric'} onChangeText={(phoneNumber) => setPhoneNumber(phoneNumber)} />

      </View>
      <CustomButton title={'Tiếp'} onPress={NextPageAvatar} />
    </View>
  )
}

export default PhoneNumber
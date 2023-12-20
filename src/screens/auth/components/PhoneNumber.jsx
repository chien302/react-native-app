import { View, Text } from 'react-native'
import React, { useState } from 'react'
import InputBox from '../../../components/InputBox'
import CustomButton from '../../../components/CustomButton'
import { ConfigColor } from '../../../utils/ConfigColor'
import AntDesign from 'react-native-vector-icons/AntDesign'

const PhoneNumber = ({ navigation, route }) => {
  const [phoneNumber, setPhoneNumber] = useState('')
  const { password, date, fullName, userName } = route.params
  const NextPageAvatar = () => {
    navigation.push('CreateAvatar', { password, date, fullName, userName, phoneNumber })
  }
  const handleBackHome = () => {
    navigation.goBack()
  }
  return (
    <View style={{ marginTop: 20, paddingHorizontal: 15 }}>
      <AntDesign name="arrowleft" color="black" size={22} onPress={handleBackHome} style={{ paddingBottom: 10 }} />

      <View>
        <Text style={{ color: ConfigColor.BLACK, marginBottom: 15, fontSize: 22, fontWeight: 'bold' }}>Số di động của bạn là gì?</Text>
        <Text style={{ color: ConfigColor.GREY, marginBottom: 15 }}>Nhập số di động có thể dùng để liên hệ
          với bạn. Thông tin này sẽ không hiển thị với ai khác trên trang cá nhân của bạn.</Text>

        <InputBox placeholder={'Số di động'} value={phoneNumber} keyboardType={'numeric'} onChangeText={(phoneNumber) => setPhoneNumber(phoneNumber)} />

      </View>
      <CustomButton style={{ height: 50 }} title={'Tiếp'} onPress={NextPageAvatar} />
    </View>
  )
}

export default PhoneNumber
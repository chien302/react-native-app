import { View, Text } from 'react-native'
import React, { useState } from 'react'
import InputBox from '../../../components/InputBox'
import CustomButton from '../../../components/CustomButton'
import { ConfigColor } from '../../../utils/ConfigColor'
import AntDesign from 'react-native-vector-icons/AntDesign'

const Username = ({ navigation, route }) => {
  const [userName, setUserName] = useState('')
  const { password, date, fullName } = route.params
  const NextPagePhoneNumber = () => {
    navigation.push('CreatePhoneNumber', { password, date, fullName, userName })
  }
  const handleBackHome = () => {
    navigation.goBack()
  }
  return (
    <View style={{ marginTop: 20, paddingHorizontal: 15 }}>
      <AntDesign name="arrowleft" color="black" size={22} onPress={handleBackHome} style={{ paddingBottom: 10 }} />

      <View>
        <Text style={{ color: ConfigColor.BLACK, marginBottom: 10, fontSize: 22, fontWeight: 'bold' }}>Tạo tên người dùng</Text>
        <Text style={{ color: ConfigColor.GREY, marginBottom: 10 }}>Thêm tên người dùng và bạn có thể đổi tên này bất cứ lúc nào</Text>


        <InputBox placeholder={'Tên người dùng'} value={userName} onChangeText={(userName) => setUserName(userName)} />
      </View>
      <CustomButton style={{ height: 50 }} title={'Tiếp'} onPress={NextPagePhoneNumber} />
    </View>
  )
}

export default Username
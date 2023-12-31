import { View, Text } from 'react-native'
import React, { useState } from 'react'
import InputBox from '../../../components/InputBox'
import CustomButton from '../../../components/CustomButton'
import { ConfigColor } from '../../../utils/ConfigColor'
import AntDesign from 'react-native-vector-icons/AntDesign'

const Fullname = ({ navigation, route }) => {
  const [fullName, setFullName] = useState('')
  const { password, date } = route.params
  const NextPagePhoneNumber = () => {
    navigation.push('CreateUsername', { password, date, fullName })
  }
  const handleBackHome = () => {
    navigation.goBack()
  }
  return (
    <View style={{ marginTop: 20, paddingHorizontal: 15 }}>
      <AntDesign name="arrowleft" color="black" size={22} onPress={handleBackHome} style={{ paddingBottom: 10 }} />

      <View>
        <Text style={{ color: ConfigColor.BLACK, marginBottom: 10, fontSize: 22, fontWeight: 'bold' }}>Bạn tên gì?</Text>

        <InputBox placeholder={'Tên đầy đủ'} value={fullName} onChangeText={(fullName) => setFullName(fullName)} />
      </View>
      <CustomButton style={{ height: 50 }} title={'Tiếp'} onPress={NextPagePhoneNumber} />
    </View>
  )
}

export default Fullname
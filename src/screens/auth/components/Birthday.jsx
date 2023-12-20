import { View, Text } from 'react-native'
import React, { useState } from 'react'
import DateTimePicker from '@react-native-community/datetimepicker';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomButton from '../../../components/CustomButton';
import InputBox from '../../../components/InputBox';
import { ConfigColor } from '../../../utils/ConfigColor';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import AntDesign from 'react-native-vector-icons/AntDesign'

const Birthday = ({ navigation, route }) => {
  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const { password } = route.params;
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(false);
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const NextPageFullname = () => {
    console.log({ date })
    navigation.push('CreateFullname', { password, date })
  }
  const handleBackHome = () => {
    navigation.goBack()
  }
  let age = 0
  if (date !== null) {
    const dateOfBirth = new Date(date);
    const today = new Date();

    age = today.getFullYear() - dateOfBirth.getFullYear();
    const monthDiff = today.getMonth() - dateOfBirth.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dateOfBirth.getDate())) {
      age--;
    }
    console.log(`The age is: ${age}`);

  }
  return (
    <View style={{ marginTop: 20, paddingHorizontal: 15 }}>
      <SafeAreaView>
        <AntDesign name="arrowleft" color="black" size={22} onPress={handleBackHome} style={{ paddingBottom: 10 }} />

        <Text style={{ color: ConfigColor.BLACK, marginBottom: 15, fontSize: 22, fontWeight: 'bold' }}>Ngày sinh của bạn là khi nào?</Text>
        <Text style={{ color: ConfigColor.GREY, marginBottom: 15 }}>Hãy sử dụng ngày sinh của chính bạn, ngay cả khi tài khoản này dành cho thú cưng hay chủ đề khác. Thông tin này sẽ không hiển thị
          với bất kỳ ai trừ khi bạn chọn chia sẻ</Text>

        {age !== null && (
          <Text style={{ color: ConfigColor.BLACK, marginBottom: 5 }}>Ngày sinh ({age} tuổi) </Text>

        )}
        <InputBox onPress={showDatepicker} placeholder="Show date picker!" value={date.getDate() + "/" + parseInt(date.getMonth() + 1) + "/" + date.getFullYear()} />

        {show && (
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode={mode}
            display='spinner'
            is24Hour={true}
            onChange={onChange}
          />
        )}
      </SafeAreaView>
      <CustomButton style={{ height: 50 }} title={'Tiếp'} onPress={NextPageFullname} />

    </View>
  )
}

export default Birthday
import { View, Text } from 'react-native'
import React, { useState } from 'react'
import DateTimePicker from '@react-native-community/datetimepicker';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomButton from '../../../components/CustomButton';
import InputBox from '../../../components/InputBox';
import { ConfigColor } from '../../../utils/ConfigColor';

const Birthday = ({ navigation }) => {
  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

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
    navigation.push('CreateFullname')
  }
  return (
    <View style={{ marginTop: 20, flex: 1, alignItems: 'center' }}>
      <SafeAreaView>
        <Text style={{ color: ConfigColor.BLACK, marginBottom: 15 }}>Ngày sinh của bạn?</Text>
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
      <CustomButton title={'Tiếp'} onPress={NextPageFullname} />

    </View>
  )
}

export default Birthday
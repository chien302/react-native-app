import { View, Text } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';

import { ConfigColor } from '../../utils/ConfigColor';




const HomeScreen = ({ navigation }) => {
  return (

    <View>
      <Text style={{ color: ConfigColor.BLACK }}>HomeScreen</Text>
      <Ionicons name="hand-right" color={'coral'} size={22} />
    </View>
  )
}

export default HomeScreen
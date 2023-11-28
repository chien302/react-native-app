import { View, Text, TouchableOpacity, Touchable, TouchableHighlight } from 'react-native'
import React from 'react'
import { ConfigColor } from '../utils/ConfigColor'

const CustomButton = ({ title, onPress }) => {
  return (
    <View style={{ width: 'full', backgroundColor: ConfigColor.BUTTON, borderRadius: 10 }}>
      <TouchableOpacity onPress={onPress}>
        <Text style={{ color: ConfigColor.WHITE, padding: 10, fontSize: 18, textAlign: 'center' }}>{title}</Text>
      </TouchableOpacity>
    </View>
  )
}

export default CustomButton
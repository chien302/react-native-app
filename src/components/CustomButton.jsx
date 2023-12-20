import { View, Text, TouchableOpacity, Touchable, TouchableHighlight } from 'react-native'
import React from 'react'
import { ConfigColor } from '../utils/ConfigColor'

const CustomButton = ({ title, onPress, type = 'bg', style }) => {
  return type === 'bg' ? (

    <View style={[
      {
        width: '100%',
        height: '100%',
        backgroundColor: ConfigColor.BUTTON,
        borderRadius: 25,
      }, style

    ]}>
      <TouchableOpacity onPress={onPress}>
        <Text style={{ color: ConfigColor.WHITE, padding: 10, fontSize: 18, textAlign: 'center' }}>{title}</Text>
      </TouchableOpacity>
    </View>
  ) : (
    <View style={[{
      width: '100%',
      height: '100%',
      backgroundColor: ConfigColor.WHITE,
      borderWidth: 1,
      borderColor: ConfigColor.GREY_NORMAL,
      borderRadius: 25
    }, style]}>
      <TouchableOpacity onPress={onPress}>
        <Text style={{ color: ConfigColor.BLACK, padding: 10, fontSize: 18, textAlign: 'center' }}>{title}</Text>
      </TouchableOpacity>
    </View>
  )
}

export default CustomButton
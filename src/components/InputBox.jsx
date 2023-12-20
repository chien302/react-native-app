import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { ConfigColor } from '../utils/ConfigColor'

const InputBox = ({ placeholder, onChangeText, onBlur, value,
  touched, secureTextEntry, keyboardType,
  maxLength, errors, onPress }) => {
  return (
    <View style={styles.mainContainer}>
      <TextInput
        style={styles.textInput}
        placeholder={placeholder}
        placeholderTextColor={ConfigColor.BLACK}
        onChangeText={onChangeText}
        onBlur={onBlur}
        value={value}
        touched={touched}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        maxLength={maxLength}
        onPressIn={onPress}
      />
      {errors && touched && <Text style={{ color: 'red', paddingTop: 2, paddingLeft: 1 }}>{errors}</Text>}
    </View>
  )
}

export default InputBox

const styles = StyleSheet.create({
  mainContainer: {
    height: 75,
    marginBottom: 5,


  },
  textInput: {
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 11,
    paddingHorizontal: 15,
    color: ConfigColor.BLACK


  }
})
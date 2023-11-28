import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { ConfigColor } from '../../utils/ConfigColor'
import InputBox from '../../components/InputBox'
import CustomButton from '../../components/CustomButton'
import { Formik } from 'formik'
import { initSchema, schema } from './utitls'
import Password from './components/Password'

const SignUp = ({ navigation }) => {
  const handleSignUp = () => {
    console.log('SignUp')
  }
  const handleRedirectLogin = () => {
    navigation.push('Login')
  }
  return (
    <View style={styles.container}>
      {/* <View style={{ flex: 0.8, justifyContent: 'center' }}>
        <Text style={styles.title}>ConnectZone</Text>
        <Formik initialValues={initSchema} validationSchema={schema} onSubmit={handleSignUp} >{({ handleChange, handleBlur, handleSubmit, values, touched, errors, isValid }) => {
          return (
            <View>
              <InputBox
                placeholder={"Email"}
                onChangeText={handleChange('Email')}
                onBlur={handleBlur('Email')}
                value={values.email}
                touched={touched.email}
                errors={errors.email}
              />
              <InputBox
                placeholder={"Password"}
                onChangeText={handleChange('Password')}
                onBlur={handleBlur('Password')}
                value={values.password}
                touched={touched.password}
                errors={errors.password}
                secureTextEntry={true}
              />
              <InputBox
                placeholder={"Re-type Password"}
                onChangeText={handleChange('RePassword')}
                onBlur={handleBlur('RePassword')}
                value={values.password}
                touched={touched.password}
                errors={errors.password}
                secureTextEntry={true}
              />

              <CustomButton title={"Sign up"} onPress={handleSubmit} />

            </View>
          )
        }}</Formik>
      </View>
      <View style={{ flex: 0.2, justifyContent: 'flex-end', marginBottom: 20 }}>
        <TouchableOpacity onPress={handleRedirectLogin}>
          <Text>Login</Text>
        </TouchableOpacity>
      </View> */}
      <Password navigation={navigation} />
    </View>
  )
}

export default SignUp
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  title: {
    fontSize: 35,
    fontWeight: '800',
    color: ConfigColor.BUTTON,
    marginBottom: 20,
    marginLeft: 'auto',
    marginRight: 'auto',
  },

})
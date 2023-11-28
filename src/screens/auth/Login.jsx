import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { Formik } from 'formik'
import { initSchema, schema } from './utitls'
import InputBox from '../../components/InputBox'
import CustomButton from '../../components/CustomButton'
import { ConfigColor } from '../../utils/ConfigColor'

const Login = ({ navigation }) => {
  const handleLogin = () => {
    console.log('login')

  }
  const handleGoHome = () => {
    navigation.push('Tabs')

  }
  const handleRedirectSignUp = () => {
    navigation.push('SignUp')

  }
  return (
    <View style={styles.container}>
      <View style={{ flex: 0.7, justifyContent: 'center' }}>
        <Text style={styles.title}>ConnectZone</Text>
        <Formik initialValues={initSchema} validationSchema={schema} onSubmit={handleLogin} >{({ handleChange, handleBlur, handleSubmit, values, touched, errors, isValid }) => {
          return (
            <View >
              <InputBox
                placeholder={"Email"}
                onChangeText={handleChange('email')}

                onBlur={handleBlur('email')}
                value={values.email}
                touched={touched.email}
                errors={errors.email}

              />
              <InputBox
                placeholder={"Mật khẩu"}
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
                touched={touched.password}
                errors={errors.password}
                secureTextEntry={true}
              />

              <CustomButton title={"Đăng nhập"} onPress={handleSubmit} />
              <View><Text>hh</Text></View>
              <CustomButton title={"Go home"} onPress={handleGoHome} />


            </View>
          )
        }}</Formik>

      </View>
      <View style={{ flex: 0.3, justifyContent: 'flex-end', marginBottom: 40 }}>
        <TouchableOpacity onPress={handleRedirectSignUp}>
          <Text style={{ color: ConfigColor.BLACK }}>Đăng ký</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Login

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
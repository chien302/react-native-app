import { View, Text, Image, StyleSheet, TouchableOpacity, Alert } from 'react-native'
import React, { useContext, useState } from 'react'
import { Formik } from 'formik'
import { initSchema, initSchemaLogin, schema } from './utitls'
import InputBox from '../../components/InputBox'
import CustomButton from '../../components/CustomButton'
import { ConfigColor } from '../../utils/ConfigColor'
import authApi from '../../api/authApi'
import HandleAuthToken from '../../utils/HandleAuthToken'
import { storeStringData } from '../../utils/HandleAsyncStorage'
import { RSA, RSAKeychain } from 'react-native-rsa-native'
import * as Keychain from 'react-native-keychain';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import userApi from '../../api/userApi'
import { AuthContext } from '../../contexts/AuthContext'

const Login = ({ navigation }) => {
  const { dispatch } = useContext(AuthContext)
  const handleLogin = async (values) => {
    try {
      if (values.phoneNumber !== undefined) {
        const res = await authApi.login(values)
        // console.log({ res: res.data })

        HandleAuthToken(res?.data?.accessToken)
        console.log('type publickey')
        console.log(typeof res?.data?.user?.publicKey)

        if (!res?.data?.user?.publicKey) {
          const keys = await RSA.generateKeys(4096)
          // const keysDH = await RSAKeychain.generate

          const updatePuclicKey = await userApi.updateUser({ publicKey: keys.public })
          const privateKey = keys.private
          // console.log('type privatekey')
          // console.log(keys.public)
          // console.log(privateKey)
          await Keychain.setGenericPassword('private', privateKey);
        }
        await storeStringData('accessToken', res?.data?.accessToken)
        await storeStringData('authUserId', res?.data?.user?.id)
        dispatch({ type: 'LOGIN_SUCCESS', payload: res?.data.user })

        if (res?.data?.accessToken && res?.data?.success === true) {
          navigation.push('Tabs')
        }
      }
    } catch (error) {
      console.log(error)
    }

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
        <Text style={styles.title}>𝙲𝚘𝚗𝚗𝚎𝚌𝚝𝚉𝚘𝚗𝚎</Text>
        <Formik initialValues={initSchemaLogin} validationSchema={schema} onSubmit={(values) => handleLogin(values)} >{({ handleChange, handleBlur, handleSubmit, values, touched, errors, isValid }) => {
          return (
            <View >
              <InputBox
                placeholder={"Số điện thoại"}
                onChangeText={handleChange('phoneNumber')}
                keyboardType={'numeric'}
                onBlur={handleBlur('phoneNumber')}
                value={values.phoneNumber}
                touched={touched.phoneNumber}
                errors={errors.phoneNumber}

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

              <CustomButton style={{ height: 50 }} title={"Đăng nhập"} onPress={handleSubmit} />
              <View style={{ height: 10 }}></View>
              <CustomButton style={{ height: 50 }} title={"Go home"} onPress={handleGoHome} />



            </View>
          )
        }}</Formik>

      </View>
      <View style={{ flex: 0.3, justifyContent: 'flex-end', marginBottom: 40, alignItems: 'center' }}>
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
    paddingHorizontal: 15,
    justifyContent: 'space-between'
  },
  title: {
    fontSize: 35,
    fontWeight: '800',
    color: ConfigColor.BUTTON,
    marginBottom: 20,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 40,
    marginBottom: 50
  },

})
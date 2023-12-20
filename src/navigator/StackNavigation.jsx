import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';


import Login from '../screens/auth/Login';
import SignUp from '../screens/auth/SignUp';
import Password from '../screens/auth/components/Password';
import Birthday from '../screens/auth/components/Birthday';
import Fullname from '../screens/auth/components/Fullname';
import PhoneNumber from '../screens/auth/components/PhoneNumber';
import Avatar from '../screens/auth/components/Avatar';
import MyTabs from './MyTabs';
import MessengerScreen from '../screens/messenger/MessengerScreen';

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login' screenOptions={{ headerShown: false }}>
        <Stack.Screen name='Login' component={Login} />

        <Stack.Screen name='SignUp' component={SignUp} />
        <Stack.Screen name='CreatePassword' component={Password} />
        <Stack.Screen name='CreateBirthday' component={Birthday} />
        <Stack.Screen name='CreateFullname' component={Fullname} />
        <Stack.Screen name='CreatePhoneNumber' component={PhoneNumber} />
        <Stack.Screen name='CreateAvatar' component={Avatar} />



        <Stack.Screen name='Tabs' component={MyTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default StackNavigation
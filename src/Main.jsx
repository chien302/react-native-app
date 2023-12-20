import React, { useContext, useEffect } from 'react';
import 'react-native-gesture-handler';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from './screens/auth/Login';
import SignUp from './screens/auth/SignUp';
import Password from './screens/auth/components/Password';
import Birthday from './screens/auth/components/Birthday';
import Fullname from './screens/auth/components/Fullname';
import PhoneNumber from './screens/auth/components/PhoneNumber';
import Avatar from './screens/auth/components/Avatar';
import MessengerScreen from './screens/messenger/MessengerScreen';
import ChatScreen from './screens/chat/ChatScreen';
import MyTabs from './navigator/MyTabs';
import { SocketContext } from './contexts/SocketContext';



const Stack = createNativeStackNavigator();

const Main = () => {
  const { socket } = useContext(SocketContext)
  useEffect(() => {
    socket.on('hello', (data) => {
      console.log(data)
    })
  }, [])
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
        <Stack.Screen name='MessengerScreen' component={MessengerScreen} />
        <Stack.Screen name='ChatScreen' component={ChatScreen} />
        <Stack.Screen name='Tabs' component={MyTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Main
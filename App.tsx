/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import 'react-native-gesture-handler';
import type { PropsWithChildren } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from './src/screens/auth/Login';
import SignUp from './src/screens/auth/SignUp';
import Password from './src/screens/auth/components/Password';
import Birthday from './src/screens/auth/components/Birthday';
import Fullname from './src/screens/auth/components/Fullname';
import PhoneNumber from './src/screens/auth/components/PhoneNumber';
import Avatar from './src/screens/auth/components/Avatar';
import MyTabs from './src/navigator/MyTabs';
import StackNavigation from './src/navigator/StackNavigation';
import MessengerScreen from './src/screens/messenger/MessengerScreen';
import ChatScreen from './src/screens/chat/ChatScreen';

const Stack = createNativeStackNavigator();

type SectionProps = PropsWithChildren<{
  title: string;
}>;


function App(): JSX.Element {


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
  );
}

const styles = StyleSheet.create({

});

export default App;

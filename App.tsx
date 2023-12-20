/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useContext, useEffect } from 'react';
import 'react-native-gesture-handler';
import type { PropsWithChildren } from 'react';
import {
  StyleSheet,
} from 'react-native';


import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthContextProvider } from './src/contexts/AuthContext';
import { SocketContextProvider } from './src/contexts/SocketContext';
import Main from './src/Main';

const Stack = createNativeStackNavigator();

type SectionProps = PropsWithChildren<{
  title: string;
}>;


function App(): JSX.Element {



  return (
    <AuthContextProvider>
      <SocketContextProvider>
        <Main />
      </SocketContextProvider>
    </AuthContextProvider>
  );
}

const styles = StyleSheet.create({

});

export default App;

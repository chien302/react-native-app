import { View, Text } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';


import Icon from 'react-native-vector-icons/FontAwesome';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SearchScreen from '../screens/search/SearchScreen';
import Profile from '../screens/profile/Profile';
import HomeScreen from '../screens/home/HomeScreen';
import CreatePost from '../screens/createPost/CreatePost';


const Tab = createBottomTabNavigator();
const MyTabs = () => {
  return (
    <Tab.Navigator screenOptions={{ tabBarHideOnKeyboard: 'true' }}
    >
      <Tab.Screen name="Home" component={HomeScreen} options={{
        headerShown: false, tabBarIcon: (tabBarIcon) => {
          return (
            <Ionicons name="home" size={24} color="black" />
          )
        }
      }} />
      <Tab.Screen name="Search" component={SearchScreen} options={{
        headerShown: false, tabBarIcon: (tabBarIcon) => {
          return (
            <Ionicons name="search-outline" size={26} color="black" />
          )
        }
      }} />
      <Tab.Screen name="Create Post" component={CreatePost} options={{
        headerShown: false, tabBarIcon: (tabBarIcon) => {
          return (
            <Icon name="plus-square-o" size={24} color="black" />
          )
        }
      }} />
      <Tab.Screen name="Profile" component={Profile} options={{
        headerShown: false, tabBarIcon: (tabBarIcon) => {
          return (
            <Ionicons name="person" size={24} color="black" />
          )
        }
      }} />

    </Tab.Navigator>
  )
}

export default MyTabs
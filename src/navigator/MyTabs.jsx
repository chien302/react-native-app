import { View, Text } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather'
import AntDesign from 'react-native-vector-icons/AntDesign'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SearchScreen from '../screens/search/SearchScreen';
import Profile from '../screens/profile/Profile';
import HomeScreen from '../screens/home/HomeScreen';
import CreatePost from '../screens/createPost/CreatePost';
import Video from '../screens/video/Video';
import { ConfigColor } from '../utils/ConfigColor';


const Tab = createBottomTabNavigator();
const MyTabs = () => {
  return (
    <Tab.Navigator screenOptions={{
      tabBarHideOnKeyboard: 'true', tabBarLabelStyle: {
        fontSize: 0,
      },
    }}
    >
      <Tab.Screen name="Home" component={HomeScreen} options={{
        headerShown: false, tabBarIcon: (tabBarIcon) => {
          return (
            <Feather name="home" size={24} color="black" />
          )
        }
      }} />
      <Tab.Screen name="Search" component={SearchScreen} options={{
        headerShown: false, tabBarIcon: (tabBarIcon) => {
          return (
            <Feather name="search" size={26} color="black" />
          )
        }
      }} />
      <Tab.Screen name="Create Post" component={CreatePost} options={{
        headerShown: false, tabBarIcon: (tabBarIcon) => {
          return (
            <View
              style={{
                width: 50,
                height: 50,
                borderRadius: 999,
                borderWidth: 1,
                borderColor: ConfigColor.GREY_NORMAL,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: ConfigColor.DISABLE_BUTTON,
                marginBottom: 32
              }}
            >
              <AntDesign name="plus" size={24} color="white" />
            </View>
          )
        }
      }} />
      <Tab.Screen name="Video" component={Video} options={{
        headerShown: false, tabBarIcon: (tabBarIcon) => {
          return (
            <MaterialCommunityIcons name="movie-play-outline" size={24} color="black" />
          )
        }
      }} />
      <Tab.Screen name="Profile" component={Profile} options={{
        headerShown: false, tabBarIcon: (tabBarIcon) => {
          return (
            <AntDesign name="user" size={24} color="black" />
          )
        }
      }} />


    </Tab.Navigator>
  )
}
export default MyTabs
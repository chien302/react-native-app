import { View, Text, Image, ScrollView } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Octicons from 'react-native-vector-icons/Octicons'
import { ConfigColor } from '../../utils/ConfigColor'
import InputBox from '../../components/InputBox'
import SearchInput from '../../components/SearchInput'

const ChatScreen = () => {
  return (
    <View style={{ position: 'relative', flex: 1, height: '100%' }}>
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingVertical: 10, paddingHorizontal: 15 }}>
        <AntDesign name="arrowleft" color="black" size={26} />
        <View style={{ flexDirection: 'row', alignItems: 'center', flex: 2, marginLeft: 15 }}>
          <Image style={{ height: 30, width: 30, borderRadius: 999, marginRight: 10 }} source={require("../../assets/imgs/i2.png")} />
          <Text style={{ color: ConfigColor.BLACK }}>den.vau</Text>
        </View>
        <View>
          <Octicons name="device-camera-video" color="black" size={24} />
        </View>
      </View>
      <ScrollView>
        <View style={{ paddingHorizontal: 12, }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Image style={{ height: 30, width: 30, borderRadius: 999, marginRight: 10 }} source={require("../../assets/imgs/i2.png")} />

            <Text style={{ color: ConfigColor.BLACK, paddingHorizontal: 8, paddingVertical: 5, backgroundColor: 'grey', color: ConfigColor.WHITE, borderRadius: 20 }}>hello den</Text>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
            <Text style={{ color: ConfigColor.BLACK, paddingHorizontal: 8, paddingVertical: 5, backgroundColor: ConfigColor.BUTTON, color: ConfigColor.WHITE, borderRadius: 20 }}>hello den</Text>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Image style={{ height: 30, width: 30, borderRadius: 999, marginRight: 10 }} source={require("../../assets/imgs/i2.png")} />

            <Text style={{ color: ConfigColor.BLACK, paddingHorizontal: 8, paddingVertical: 5, backgroundColor: 'grey', color: ConfigColor.WHITE, borderRadius: 20 }}>hello den</Text>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
            <Text style={{ color: ConfigColor.BLACK, paddingHorizontal: 8, paddingVertical: 5, backgroundColor: ConfigColor.BUTTON, color: ConfigColor.WHITE, borderRadius: 20 }}>hello den</Text>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Image style={{ height: 30, width: 30, borderRadius: 999, marginRight: 10 }} source={require("../../assets/imgs/i2.png")} />

            <Text style={{ color: ConfigColor.BLACK, paddingHorizontal: 8, paddingVertical: 5, backgroundColor: 'grey', color: ConfigColor.WHITE, borderRadius: 20 }}>hello den</Text>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
            <Text style={{ color: ConfigColor.BLACK, paddingHorizontal: 8, paddingVertical: 5, backgroundColor: ConfigColor.BUTTON, color: ConfigColor.WHITE, borderRadius: 20 }}>hello den</Text>
          </View>

        </View>
      </ScrollView>
      <View style={{ position: 'absolute', bottom: 0, }}>
        <SearchInput />
      </View>
    </View>
  )
}

export default ChatScreen
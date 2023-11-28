import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import SearchInput from '../../components/SearchInput'
import { ConfigColor } from '../../utils/ConfigColor'
const MessengerScreen = ({ navigation }) => {
  const [searchText, setSearchText] = useState('')
  const handleBackHome = () => {
    navigation.goBack()
  }
  const handleOpenChat = () => {
    navigation.push('ChatScreen')
  }
  return (
    <ScrollView >
      <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 15, paddingTop: 15 }}>
        <AntDesign name="arrowleft" color="black" size={26} onPress={handleBackHome} />
        <Text style={{ color: ConfigColor.BLACK, fontSize: 20, fontWeight: 'bold', marginLeft: 20, marginBottom: 3 }}>chievuo3010</Text>
      </View>
      <View>
        <SearchInput searchInputValue={searchText} setSearchInputValue={setSearchText} />
      </View>
      <View style={{ paddingHorizontal: 15 }}>
        <Text style={{ color: ConfigColor.BLACK, fontWeight: '600', fontSize: 16, paddingVertical: 10 }}>Tin nhắn</Text>

        <TouchableOpacity onPress={handleOpenChat}>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 15 }}>
            <Image style={{ height: 50, width: 50, borderRadius: 999, marginRight: 15 }} source={require("../../assets/imgs/i4.png")} />
            <View>
              <Text style={{ color: ConfigColor.BLACK, fontWeight: 500, fontSize: 16 }}>den.vau</Text>
              <Text style={{ color: ConfigColor.BLACK }}>Đã gửi vào 1/10/2023</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 15 }}>
            <Image style={{ height: 50, width: 50, borderRadius: 999, marginRight: 15 }} source={require("../../assets/imgs/i2.png")} />
            <View>
              <Text style={{ color: ConfigColor.BLACK, fontWeight: 500, fontSize: 16 }}>messi</Text>
              <Text style={{ color: ConfigColor.BLACK }}>Đã gửi vào 3/10/2023</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 15 }}>
            <Image style={{ height: 50, width: 50, borderRadius: 999, marginRight: 15 }} source={require("../../assets/imgs/i3.png")} />
            <View>
              <Text style={{ color: ConfigColor.BLACK, fontWeight: 500, fontSize: 16 }}>cristiano</Text>
              <Text style={{ color: ConfigColor.BLACK }}>Đã gửi vào 13/11/2023</Text>
            </View>
          </View>
        </TouchableOpacity>


      </View>
    </ScrollView>
  )
}

export default MessengerScreen
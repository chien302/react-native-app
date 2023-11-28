import { View, Text, ScrollView, Image } from 'react-native'
import React from 'react'
import Fontisto from 'react-native-vector-icons/Fontisto';
import Octicons from 'react-native-vector-icons/Octicons'
import Feather from 'react-native-vector-icons/Feather'
import { ConfigColor } from '../../utils/ConfigColor';




const HomeScreen = ({ navigation }) => {
  const handleRedirectMessenger = () => {
    navigation.push('MessengerScreen')
  }
  return (
    <ScrollView>
      <View style={{ borderBottomWidth: 1, borderBottomColor: 'grey', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 15, paddingHorizontal: 15 }}>
        <Text style={{ color: ConfigColor.BLACK, fontSize: 24, fontWeight: 'bold' }}>Connect</Text>
        <View>
          <Fontisto name='messenger' color='black' size={20} onPress={handleRedirectMessenger} />
        </View>
      </View>
      <View>
        <View style={{ marginTop: 15 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 10 }}>
            <Image style={{ height: 50, width: 50, borderRadius: 999 }} source={require("../../assets/imgs/i4.png")} />
            <Text style={{ color: ConfigColor.BLACK, fontSize: 16, fontWeight: '500', marginLeft: 10 }}>den.vau</Text>
          </View>
          <Image style={{ width: 'full', height: 200, objectFit: 'cover', marginTop: 10 }} source={require("../../assets/imgs/i2.png")} />
          <View style={{ paddingHorizontal: 10 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10, marginBottom: 5 }}>
              <Octicons name='heart' size={20} color='black' />
              <Fontisto name='comment' size={20} color='black' style={{ marginLeft: 20, marginRight: 20 }} />
              <Feather name='send' size={20} color='black' />
            </View>
            <Text style={{ color: ConfigColor.BLACK, fontSize: 16 }}>Co chien va nhung nguoi khac thich</Text>
          </View>
        </View>
        <View style={{ marginTop: 15 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 10 }}>
            <Image style={{ height: 50, width: 50, borderRadius: 999 }} source={require("../../assets/imgs/i1.png")} />
            <Text style={{ color: ConfigColor.BLACK, fontSize: 16, fontWeight: '500', marginLeft: 10 }}>den.vau</Text>
          </View>
          <Image style={{ width: 'full', height: 200, objectFit: 'cover', marginTop: 10 }} source={require("../../assets/imgs/i1.png")} />
          <View style={{ paddingHorizontal: 10 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10, marginBottom: 5 }}>
              <Octicons name='heart' size={20} color='black' />
              <Fontisto name='comment' size={20} color='black' style={{ marginLeft: 20, marginRight: 20 }} />
              <Feather name='send' size={20} color='black' />
            </View>
            <Text style={{ color: ConfigColor.BLACK, fontSize: 16 }}>Co chien va nhung nguoi khac thich</Text>
          </View>
        </View>
        <View style={{ marginTop: 15 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 10 }}>
            <Image style={{ height: 50, width: 50, borderRadius: 999 }} source={require("../../assets/imgs/i3.png")} />
            <Text style={{ color: ConfigColor.BLACK, fontSize: 16, fontWeight: '500', marginLeft: 10 }}>den.vau</Text>
          </View>
          <Image style={{ width: 'full', height: 200, objectFit: 'cover', marginTop: 10 }} source={require("../../assets/imgs/i2.png")} />
          <View style={{ paddingHorizontal: 10 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10, marginBottom: 5 }}>
              <Octicons name='heart' size={20} color='black' />
              <Fontisto name='comment' size={20} color='black' style={{ marginLeft: 20, marginRight: 20 }} />
              <Feather name='send' size={20} color='black' />
            </View>
            <Text style={{ color: ConfigColor.BLACK, fontSize: 16 }}>Co chien va nhung nguoi khac thich</Text>
          </View>
        </View>
        <View style={{ marginTop: 15 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 10 }}>
            <Image style={{ height: 50, width: 50, borderRadius: 999 }} source={require("../../assets/imgs/i4.png")} />
            <Text style={{ color: ConfigColor.BLACK, fontSize: 16, fontWeight: '500', marginLeft: 10 }}>den.vau</Text>
          </View>
          <Image style={{ width: 'full', height: 200, objectFit: 'cover', marginTop: 10 }} source={require("../../assets/imgs/i3.png")} />
          <View style={{ paddingHorizontal: 10 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10, marginBottom: 5 }}>
              <Octicons name='heart' size={20} color='black' />
              <Fontisto name='comment' size={20} color='black' style={{ marginLeft: 20, marginRight: 20 }} />
              <Feather name='send' size={20} color='black' />
            </View>
            <Text style={{ color: ConfigColor.BLACK, fontSize: 16 }}>Co chien va nhung nguoi khac thich</Text>
          </View>
        </View>
        <View style={{ marginTop: 15 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 10 }}>
            <Image style={{ height: 50, width: 50, borderRadius: 999 }} source={require("../../assets/imgs/i2.png")} />
            <Text style={{ color: ConfigColor.BLACK, fontSize: 16, fontWeight: '500', marginLeft: 10 }}>den.vau</Text>
          </View>
          <Image style={{ width: 'full', height: 200, objectFit: 'cover', marginTop: 10 }} source={require("../../assets/imgs/i4.png")} />
          <View style={{ paddingHorizontal: 10 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10, marginBottom: 5 }}>
              <Octicons name='heart' size={20} color='black' />
              <Fontisto name='comment' size={20} color='black' style={{ marginLeft: 20, marginRight: 20 }} />
              <Feather name='send' size={20} color='black' />
            </View>
            <Text style={{ color: ConfigColor.BLACK, fontSize: 16 }}>Co chien va nhung nguoi khac thich</Text>
          </View>
        </View>


      </View>
    </ScrollView>
  )
}

export default HomeScreen
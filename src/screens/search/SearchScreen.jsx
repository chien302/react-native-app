import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign'
import { ConfigColor } from '../../utils/ConfigColor'
import InputBox from '../../components/InputBox'
import SearchInput from '../../components/SearchInput';

const SearchScreen = ({ navigation }) => {
  const handleBackHome = () => {
    navigation.goBack()
  }
  return (
    <ScrollView>
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginHorizontal: 15, paddingTop: 20, marginBottom: 10 }}>
        <AntDesign name="arrowleft" color="black" size={24} onPress={handleBackHome} style={{ marginRight: 15 }} />

        <SearchInput />
      </View>
      <View style={{ marginHorizontal: 15 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
          <Text style={{ color: ConfigColor.BLACK, fontSize: 16, fontWeight: 'bold', marginBottom: 14 }} >Gần đây</Text>
          <Text style={{ color: ConfigColor.BUTTON, fontSize: 13, fontWeight: '400', marginBottom: 14 }} >Xem tất cả</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 15 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Image
              style={{ height: 55, width: 55, borderRadius: 999, marginRight: 15, objectFit: 'cover' }}
              source={require("../../assets/imgs/i9.png")}
            />
            <View>
              <Text style={{ color: ConfigColor.BLACK, fontWeight: '700', fontSize: 15 }}>leomessi</Text>
              <Text style={{ color: ConfigColor.BLACK, marginTop: 5, color: ConfigColor.GREY }}>Leo Messi</Text>
            </View>
          </View>
          <TouchableOpacity style={{}}>
            <AntDesign name='close' size={16} color={ConfigColor.GREY} />
          </TouchableOpacity>
        </View>

        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 15 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Image
              style={{ height: 55, width: 55, borderRadius: 999, marginRight: 15, objectFit: 'cover' }}
              source={require("../../assets/imgs/i5.png")}
            />
            <View>
              <Text style={{ color: ConfigColor.BLACK, fontWeight: '700', fontSize: 15 }}>cristiano</Text>
              <Text style={{ color: ConfigColor.BLACK, marginTop: 5, color: ConfigColor.GREY }}>Cristiano Ronaldo</Text>
            </View>
          </View>
          <TouchableOpacity style={{}}>
            <AntDesign name='close' size={16} color={ConfigColor.GREY} />
          </TouchableOpacity>
        </View>

        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 15 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Image
              style={{ height: 55, width: 55, borderRadius: 999, marginRight: 15, objectFit: 'cover' }}
              source={require("../../assets/imgs/i8.png")}
            />
            <View>
              <Text style={{ color: ConfigColor.BLACK, fontWeight: '700', fontSize: 15 }}>chievuo3010</Text>
              <Text style={{ color: ConfigColor.BLACK, marginTop: 5, color: ConfigColor.GREY }}>Vương Xuân Chiến</Text>
            </View>
          </View>
          <TouchableOpacity style={{}}>
            <AntDesign name='close' size={16} color={ConfigColor.GREY} />
          </TouchableOpacity>
        </View>

      </View>

    </ScrollView>
  )
}

export default SearchScreen
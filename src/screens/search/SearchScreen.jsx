import { View, Text, Image, ScrollView } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { ConfigColor } from '../../utils/ConfigColor'
import InputBox from '../../components/InputBox'
import SearchInput from '../../components/SearchInput';

const SearchScreen = () => {
  return (
    <ScrollView>
      <View>
        <SearchInput />
      </View>
      <View style={{ marginHorizontal: 20 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 15 }}>
          <Image style={{ height: 55, width: 55, borderRadius: 999, marginRight: 15, objectFit: 'cover' }} source={require("../../assets/imgs/i1.png")} />
          <View>
            <Text style={{ color: ConfigColor.BLACK, fontWeight: '600' }}>chievuo3010</Text>
            <Text style={{ color: ConfigColor.BLACK, marginTop: 5 }}>Vương Xuân Chiến</Text>
          </View>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 15 }}>
          <Image style={{ height: 55, width: 55, borderRadius: 999, marginRight: 15, objectFit: 'cover' }} source={require("../../assets/imgs/i1.png")} />
          <View>
            <Text style={{ color: ConfigColor.BLACK, fontWeight: '600' }}>chievuo3010</Text>
            <Text style={{ color: ConfigColor.BLACK, marginTop: 5 }}>Vương Xuân Chiến</Text>
          </View>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 15 }}>
          <Image style={{ height: 55, width: 55, borderRadius: 999, marginRight: 15, objectFit: 'cover' }} source={require("../../assets/imgs/i1.png")} />
          <View>
            <Text style={{ color: ConfigColor.BLACK, fontWeight: '600' }}>chievuo3010</Text>
            <Text style={{ color: ConfigColor.BLACK, marginTop: 5 }}>Vương Xuân Chiến</Text>
          </View>
        </View>
      </View>

    </ScrollView>
  )
}

export default SearchScreen
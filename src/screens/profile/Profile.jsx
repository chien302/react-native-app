import { View, Text, Image, ScrollView } from 'react-native'
import React, { useRef } from 'react'
import RBSheet from "react-native-raw-bottom-sheet";

import { ConfigColor } from '../../utils/ConfigColor'
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/FontAwesome';

import CustomButton from '../../components/CustomButton';

const Profile = () => {
  const refRBSheet = useRef();

  return (
    <ScrollView>
      <View style={{ marginHorizontal: 10, marginTop: 15 }}>
        <View style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={{ color: ConfigColor.BLACK, fontSize: 24, fontWeight: 'bold' }}>chievuo3010</Text>

          <Ionicons name="menu-outline" size={28} color='black' onPress={() => refRBSheet.current.open()} />
        </View>
        <View style={{ marginTop: 15, justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center' }}>
          <Image style={{ width: 90, height: 90, borderColor: 'grey', borderWidth: 1, borderRadius: 500 }} source={require('../../assets/imgs/person2.png')} />
          <View style={{ justifyContent: 'space-between', flexDirection: 'row', marginLeft: 20 }}>
            <View style={{ flexDirection: 'column', alignItems: 'center' }}>
              <Text style={{ color: ConfigColor.BLACK, fontSize: 14, fontWeight: 'bold' }}>8</Text>
              <Text style={{ color: ConfigColor.BLACK, fontSize: 14 }}>Bài viết</Text>
            </View>
            <View style={{ flexDirection: 'column', alignItems: 'center' }}>
              <Text style={{ color: ConfigColor.BLACK, fontSize: 14, fontWeight: 'bold' }}>120</Text>
              <Text style={{ color: ConfigColor.BLACK, fontSize: 14 }}>Người theo dõi</Text>
            </View>
            <View style={{ flexDirection: 'column', alignItems: 'center' }}>
              <Text style={{ color: ConfigColor.BLACK, fontSize: 14, fontWeight: 'bold' }}>54</Text>
              <Text style={{ color: ConfigColor.BLACK, fontSize: 14 }}>Đang theo dõi</Text>
            </View>
          </View>
        </View>
        <View style={{ marginTop: 20 }}>
          <Text style={{ color: ConfigColor.BLACK, fontSize: 16, marginBottom: 15 }}>Khám phá mọi người</Text>

          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View style={{ flexDirection: 'column', alignItems: 'center', marginRight: 15 }}>
              <Image style={{ width: 90, height: 90, borderColor: 'grey', borderWidth: 1, borderRadius: 500 }} source={require('../../assets/imgs/person2.png')} />
              <Text style={{ color: ConfigColor.BLACK }}>Messi</Text>
              <Text style={{ color: ConfigColor.BLACK }}>Gợi ý cho bạn</Text>
              <CustomButton title={'Theo dõi'} />
            </View>
            <View style={{ flexDirection: 'column', alignItems: 'center', marginRight: 15 }}>
              <Image style={{ width: 90, height: 90, borderColor: 'grey', borderWidth: 1, borderRadius: 500 }} source={require('../../assets/imgs/person2.png')} />
              <Text style={{ color: ConfigColor.BLACK }}>Messi</Text>
              <Text style={{ color: ConfigColor.BLACK }}>Gợi ý cho bạn</Text>
              <CustomButton title={'Theo dõi'} />
            </View>
            <View style={{ flexDirection: 'column', alignItems: 'center', marginRight: 15 }}>
              <Image style={{ width: 90, height: 90, borderColor: 'grey', borderWidth: 1, borderRadius: 500 }} source={require('../../assets/imgs/person2.png')} />
              <Text style={{ color: ConfigColor.BLACK }}>Messi</Text>
              <Text style={{ color: ConfigColor.BLACK }}>Gợi ý cho bạn</Text>
              <CustomButton title={'Theo dõi'} />
            </View>
            <View style={{ flexDirection: 'column', alignItems: 'center', marginRight: 15 }}>
              <Image style={{ width: 90, height: 90, borderColor: 'grey', borderWidth: 1, borderRadius: 500 }} source={require('../../assets/imgs/person2.png')} />
              <Text style={{ color: ConfigColor.BLACK }}>Messi</Text>
              <Text style={{ color: ConfigColor.BLACK }}>Gợi ý cho bạn</Text>
              <CustomButton title={'Theo dõi'} />
            </View>


          </View>
        </View>

      </View >
      <View style={{ marginTop: 50 }}>
        <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
          <Image style={{ flex: 1, flexBasis: 0.3, height: 100, marginRight: 1, marginLeft: 1 }} source={require("../../assets/imgs/i1.png")} />
          <Image style={{ flex: 1, flexBasis: 0.3, height: 100, marginRight: 1, marginLeft: 1 }} source={require("../../assets/imgs/i2.png")} />
          <Image style={{ flex: 1, flexBasis: 0.3, height: 100, marginRight: 1, marginLeft: 1 }} source={require("../../assets/imgs/i3.png")} />



        </View>
      </View>
      <RBSheet
        ref={refRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={false}
        customStyles={{
          wrapper: {
            backgroundColor: "transparent"
          },
          draggableIcon: {
            backgroundColor: "#000"
          }
        }}
      >
        <View style={{ marginTop: 15 }}>
          <View style={{ marginHorizontal: 20 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text style={{ fontSize: 16, marginBottom: 20, color: ConfigColor.BLACK }}>Đổi thông tin</Text>
              <Icons name='angle-right' color='black' size={24} />
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text style={{ fontSize: 16, marginBottom: 20, color: ConfigColor.BLACK }}>Đăng xuất</Text>
              <Icons name='angle-right' color='black' size={24} />
            </View>
          </View>

        </View>
      </RBSheet>
    </ScrollView >
  )
}

export default Profile
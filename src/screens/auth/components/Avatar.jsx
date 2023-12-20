import { View, Text, Image, TouchableWithoutFeedback, Modal, Pressable, StyleSheet } from 'react-native'
import React, { useRef, useState } from 'react'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import RBSheet from "react-native-raw-bottom-sheet";
import axios from 'axios';
import CustomButton from '../../../components/CustomButton';
import { ConfigColor } from '../../../utils/ConfigColor';
import axiosClient from '../../../api/axiosClient';
import authApi from '../../../api/authApi';
import { storeStringData } from '../../../utils/HandleAsyncStorage';

const Avatar = ({ route, navigation }) => {
  const refRBSheet = useRef();
  const [modalVisible, setModalVisible] = useState(false);
  const [image, setImage] = useState('');

  const { password, date, fullName, userName, phoneNumber } = route.params


  const ImagePickerLibrary = () => {
    let options = {
      storageOptions: {
        path: 'image'
      }
    }
    launchImageLibrary(options, (res) => {
      console.log(res);
      if (res && res?.assets) {
        setImage(res.assets[0].uri)
      }
    })
  }
  const ImagePickerCamera = () => {
    let options = {
      storageOptions: {
        path: 'image'
      }
    }
    launchCamera(options, (res) => {
      console.log(res);
      if (res && res?.assets) {
        setImage(res.assets[0].uri)
      }
    })
  }
  const handleRegister = async () => {
    const dateOfBirth = date.getDate() + "/" + parseInt(date.getMonth() + 1) + "/" + date.getFullYear()
    const data = {
      fullName, phoneNumber, password, dateOfBirth, userName
    }
    // console.log({ data })
    try {
      if (data.phoneNumber !== undefined) {
        const res = await authApi.register(data)
        // console.log(res?.data)
        storeStringData('accessToken', res?.data?.accessToken)
        if (res?.data?.accessToken && res?.data?.success === true) {
          navigation.push('Tabs')
        }

      }
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <View style={{ paddingHorizontal: 15, paddingTop: 50 }}>
      <Text
        style={{ color: ConfigColor.BLACK, fontSize: 22, fontWeight: "bold" }}
      >
        Thêm ảnh đại diện
      </Text>
      <Text
        style={{ color: ConfigColor.GREY }}
      >
        Hãy thêm ảnh đại diện để bạn bè nhận ra bạn.
        Mọi người có thể nhìn thấy ảnh của bạn.
      </Text>
      <View
        style={{
          // flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >


        <View style={{ width: 200, height: 200, marginTop: 35, borderRadius: 999, borderWidth: 1, borderColor: ConfigColor.GREY_NORMAL }}>
          {image !== "" ? (
            <Pressable onPress={() => refRBSheet.current.open()}>
              <Image
                style={{ width: 200, height: 200, borderColor: ConfigColor.WHITE, borderRadius: 999, borderWidth: 10 }}
                source={{ uri: image }}
              />
            </Pressable>
          ) : (
            <Pressable onPress={() => refRBSheet.current.open()}>
              <Image
                style={{ width: 200, height: 200, borderColor: ConfigColor.WHITE, borderRadius: 999, borderWidth: 10 }}
                source={require('../../../assets/imgs/person5.png')}
              />
            </Pressable>
          )}

        </View>


        {/* <Text style={{ color: ConfigColor.BLACK }}>{password}</Text>
      <Text style={{ color: ConfigColor.BLACK }}>{date.getDate() + "/" + parseInt(date.getMonth() + 1) + "/" + date.getFullYear()}</Text>
      <Text style={{ color: ConfigColor.BLACK }}>{fullName}</Text>
      <Text style={{ color: ConfigColor.BLACK }}>{phoneNumber}</Text>
      <Text style={{ color: ConfigColor.BLACK }}>{image.uri}</Text> */}

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
          <View style={styles.centeredView}>
            <Text style={{ marginLeft: 20, fontSize: 24, fontWeight: "bold", color: ConfigColor.BLACK }}>Thêm ảnh</Text>
            <View style={styles.modalView}>
              <Text
                onPress={ImagePickerLibrary}
                style={{ fontSize: 18, marginBottom: 20, color: ConfigColor.BLACK }}
              >
                Chọn ảnh từ thư viện
              </Text>
              <Text
                onPress={ImagePickerCamera}
                style={{ fontSize: 18, color: ConfigColor.BLACK }}
              >
                Chụp ảnh
              </Text>
            </View>

          </View>
        </RBSheet>


      </View>
      <View style={{ marginTop: 210, paddingVertical: 20, borderTopWidth: 1, borderTopColor: ConfigColor.GREY_NORMAL }}>
        <CustomButton
          style={{ height: 50 }}
          title={image === '' ? 'Thêm ảnh' : 'Thay đổi'}
          onPress={() => refRBSheet.current.open()}
        />
        <View style={{ height: 14 }}></View>
        {image !== "" ? (
          <CustomButton title="Tạo tài khoản" onPress={handleRegister} />
        ) : (
          <CustomButton style={{ height: 50 }} type='nobg' title="Bỏ qua" onPress={() => setImage('')} />
        )}
      </View>
    </View>


  );
}
export default Avatar

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    // justifyContent: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 25,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },

  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },

});

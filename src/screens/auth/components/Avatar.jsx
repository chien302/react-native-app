import { View, Text, Image, TouchableWithoutFeedback, Modal, Pressable, StyleSheet } from 'react-native'
import React, { useRef, useState } from 'react'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import RBSheet from "react-native-raw-bottom-sheet";
import CustomButton from '../../../components/CustomButton';
import { ConfigColor } from '../../../utils/ConfigColor';

const Avatar = () => {
  const refRBSheet = useRef();
  const [modalVisible, setModalVisible] = useState(false);
  const [image, setImage] = useState('');
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
  const handleRegister = () => { }
  return (

    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View style={{ width: 150, height: 150, margin: 10, borderWidth: 1, borderColor: ConfigColor.DISABLE_BUTTON, borderRadius: 500 }}>
        {image !== "" ? (
          <Image style={{ width: 150, height: 150, borderColor: ConfigColor.WHITE, borderWidth: 10, borderRadius: 500 }} source={{ uri: image }} />
        ) : (
          <Image style={{ width: 150, height: 150, borderColor: ConfigColor.WHITE, borderWidth: 10, borderRadius: 500 }} source={require('../../../assets/imgs/person2.png')} />
        )}

      </View>
      <CustomButton title="Thêm ảnh đại diện" onPress={() => refRBSheet.current.open()} />
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
            <Text onPress={ImagePickerLibrary} style={{ fontSize: 18, marginBottom: 20, color: ConfigColor.BLACK }}>Chọn ảnh từ thư viện</Text>
            <Text onPress={ImagePickerCamera} style={{ fontSize: 18, color: ConfigColor.BLACK }}>Chụp ảnh</Text>
          </View>

        </View>
      </RBSheet>
      {image !== "" && (

        <View style={{ flex: 1, justifyContent: 'flex-end', marginBottom: 20 }}>
          <CustomButton title="Tạo tài khoản" onPress={handleRegister} />
        </View>
      )}

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

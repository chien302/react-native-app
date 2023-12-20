import AsyncStorage from '@react-native-async-storage/async-storage';

const HandleAsyncStorage = {
  get: async key => {
    const value = await AsyncStorage.getItem(key);
    return JSON.parse(value);
  },
  set: async (key, value) => {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  },
  delete: async key => {
    await AsyncStorage.removeItem(key);
  },
};
export default HandleAsyncStorage;

export const storeStringData = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (e) {}
};

export const storeObjectData = async (key, value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (e) {
    // saving error
  }
};

export const getStringData = async key => {
  try {
    const value = await AsyncStorage.getItem(key);
    return value;
  } catch (e) {
    // error reading value
  }
};

export const removeStringData = async key => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (e) {
    // error reading value
  }
};

export const getObjectData = async key => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    // error reading value
  }
};

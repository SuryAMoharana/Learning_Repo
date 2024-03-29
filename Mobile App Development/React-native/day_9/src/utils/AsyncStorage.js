import AsyncStorage from '@react-native-async-storage/async-storage';

const storeData = (key, value) => {
  let stringData;
  if (typeof value == 'string') {
    stringData = value;
  } else {
    stringData = JSON.stringify(value);
  }
  try {
    AsyncStorage.setItem(key, stringData);
  } catch (e) {}
};

const retriveData = key => {};

export {storeData, retriveData};

import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {storeData} from './src/utils/AsyncStorage';
import AsyncStorage from '@react-native-async-storage/async-storage';

const App = () => {
  const [data, setData] = useState('');

  const isJSON = str => {
    try {
      JSON.parse(str);
    } catch (e) {
      return false;
    }
    return true;
  };

  useEffect(() => {
    //IIFI
    (async () => {
      const data = await AsyncStorage.getItem('data');
      data && isJSON(data) ? setData(JSON.parse(data)) : setData(data || '');
      //   if(data){
      //     setData(data)
      //   }
    })();

    // AsyncStorage.getItem('data').then(data => {
    //   if (data) {
    //     setData(data);
    //   }
    // });
  }, []);

  useEffect(() => {
    storeData('data', data);
  }, [data]);

  return (
    <View>
      <Text style={styles.text}>Persist Tutorial</Text>
      <Text style={{textAlign: 'center'}}>Date:{data}</Text>
      <TouchableOpacity
        style={{
          height: 40,
          width: 300,
          backgroundColor: 'red',
          alignItems: 'center',
          padding: 10,
          borderRadius: 20,
          alignSelf: 'center',
        }}
        onPress={() => setData('NewData')}>
        <Text>Press me</Text>
      </TouchableOpacity>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    textAlign: 'center',
  },
});

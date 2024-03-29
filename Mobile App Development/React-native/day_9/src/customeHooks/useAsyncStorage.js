// Basic Example
import {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const App = () => {
  const [data, setData] = useState('');

  const isJSON = (str: any) => {
    try {
      JSON.parse(str);
    } catch (e) {
      return false;
    }
    return true;
  };

  useEffect(() => {
    (async () => {
      const data = await AsyncStorage.getItem('data');
      data && isJSON(data) ? setData(JSON.parse(data)) : setData(data || '');
    })();
  }, []);

  const storeData = (key: string, value: string | object) => {
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

  useEffect(() => {
    storeData('data', data);
  }, [data]);

  return (
    <View>
      <Text style={{fontSize: 34, textAlign: 'center'}}>Persist Tutorial</Text>
      <Text style={{textAlign: 'center'}}>Data: {data}</Text>
      <TouchableOpacity
        style={{
          backgroundColor: 'red',
          padding: 10,
          width: 240,
          borderRadius: 10,
          alignSelf: 'center',
          marginTop: 30,
        }}
        onPress={() => setData('New Data')}>
        <Text style={{color: '#FFF', textAlign: 'center'}}>Set Data</Text>
      </TouchableOpacity>
    </View>
  );
};

export default App;
import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const Home = () => {
    const navigation=useNavigation();
  return (
    <View>
      <Text>Home</Text>
      <Button title="Stack Navigate" onPress={()=>navigation.navigate("Job")}/>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})
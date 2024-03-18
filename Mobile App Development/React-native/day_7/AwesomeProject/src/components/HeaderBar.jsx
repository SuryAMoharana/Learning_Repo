import { Image, SafeAreaView, StyleSheet, TextInput, View } from "react-native";
import React from "react";
import {FontAwesome5 as FontAwesome5} from "react-native-vector-icons";
import {MaterialCommunityIcons as MaterialCommunityIcons} from "react-native-vector-icons";

const HeaderBar = ({imageSource,icon}) => {
  return (
    <View style={styles.container}>
      <Image
        source={imageSource}
        style={styles.roundImage}
      />
      <View style={styles.searchBox}>
        <FontAwesome5 name="search" size={15} color='grey' style={{marginLeft:10}}/>
        <TextInput placeholder="Search..." style={{fontSize:15,marginLeft:10, flex:1}}></TextInput>              
      </View>
      <MaterialCommunityIcons name={icon} size={25} color='grey'/>
    </View>
  );
};

export default HeaderBar;

const styles = StyleSheet.create({
  container: {
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-around'
  },
  searchBox:{
    flexDirection:'row',
    alignItems:'center',
    flex:1,
    backgroundColor:'#F0E8E6',
    borderRadius:20,
    height:30,
    marginLeft:10,
    marginRight:10
  },
  roundImage: {
    width: 40,
    height: 40,
    borderRadius: 100,
  },
});

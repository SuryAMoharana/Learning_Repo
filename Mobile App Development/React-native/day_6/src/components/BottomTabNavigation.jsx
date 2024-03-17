import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Entypo as Entypo } from "react-native-vector-icons";
import { FontAwesome as FontAwesome } from "react-native-vector-icons";
import Home from '../screens/Home';
import MyNetwork from '../screens/MyNetwork';
import Post from '../screens/Post';
import Job from '../screens/Job';
import Notification from '../screens/Notification';


const BottomTabNavigation = () => {
    const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen
            name="Home"
            component={Home}
            options={{
              tabBarIcon: () => <Entypo name="home" size={25} color="grey" />,
            }}
          />
          <Tab.Screen
            name="My Network"
            component={MyNetwork}
            options={{
              tabBarIcon: () => <Entypo name="users" size={25} color="grey" />,
            }}
          />
          <Tab.Screen
            name="Post"
            component={Post}
            options={{
              tabBarIcon: () => (
                <Entypo name="squared-plus" size={25} color="grey" />
              ),
            }}
          />
          <Tab.Screen
            name="Notifications"
            component={Notification}
            options={{
              tabBarIcon: () => <Entypo name="bell" size={25} color="grey" />,
            }}
          />
          <Tab.Screen
            name="Jobs"
            component={Job}
            options={{
              tabBarIcon: () => (
                <FontAwesome name="shopping-bag" size={25} color="grey" />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
  )
}

export default BottomTabNavigation
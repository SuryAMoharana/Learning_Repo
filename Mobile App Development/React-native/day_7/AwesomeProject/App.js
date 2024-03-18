import React from "react";
import { Platform, SafeAreaView, StyleSheet, TouchableOpacity, Image } from "react-native";
import HeaderBar from "./src/components/HeaderBar";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { Entypo, FontAwesome } from "react-native-vector-icons";
import Home from "./src/screens/Home";
import MyNetwork from "./src/screens/MyNetwork";
import Post from "./src/screens/Post";
import Notification from "./src/screens/Notification";
import Job from "./src/screens/Job";

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const BottomTabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: { backgroundColor: "#F5B9AA" },
        tabBarInactiveTintColor: "blue",
        tabBarActiveTintColor: "black",
      }}
    >
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
          tabBarIcon: () => <Entypo name="squared-plus" size={25} color="grey" />,
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
  );
};

const CustomDrawerContent = ({ navigation }) => {
  return (
    <DrawerContentScrollView>
      <DrawerItem
        label="Job"
        onPress={() => navigation.navigate('Job')}
      />
    </DrawerContentScrollView>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={(props) => <CustomDrawerContent {...props} />}>
        <Drawer.Screen name="BottomTabNavigation" component={BottomTabNavigation} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

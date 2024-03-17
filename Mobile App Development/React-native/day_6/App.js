import { StyleSheet, Text, View } from "react-native";
import React from "react";

import BottomTabNavigation from "./src/components/BottomTabNavigation";
import StackNavigation from "./src/components/StackNavigation";

const App = () => {
  return (
    <>
      <StackNavigation />
      <BottomTabNavigation />
    </>
  );
};

export default App;

const styles = StyleSheet.create({});

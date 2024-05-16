import React, { useState } from "react";

import "react-native-gesture-handler";
// Your other imports go here
import { NavigationContainer } from "@react-navigation/native";

import AppNavigator from "../components/appNavigator/AppNavigator";
const App = () => {
  return (
    // <NavigationContainer>
      <AppNavigator />
    // {/* </NavigationContainer> */}
  );
};

export default App;

import React, { useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";

import TestScreen from "./Screen";

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="1"
      options={{ title: '' }}
      component={TestScreen} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "../screens/HomeScreen";
import ShippingScreen from "../screens/ShippingScreen";
import ListScreen from "../screens/ListScreen";
import LoadingSreen from "../screens/LoadingScreen"


const Stack = createNativeStackNavigator();

export function AppStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Shipping" component={ShippingScreen} />
      <Stack.Screen name="List" component={ListScreen} />
      <Stack.Screen name="Loading" component={LoadingSreen} />
    </Stack.Navigator>
  );
}

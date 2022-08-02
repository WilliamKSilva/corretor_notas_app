import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DetailsClient from "../screens/DetailsClient";
import TabBarNavigation from "./TabBarNavigation";

const Stack = createNativeStackNavigator()

export default function StackNavigation() {
  return (
    <Stack.Navigator initialRouteName="TabBar">
      <Stack.Screen
        name="DetailsClient"
        component={DetailsClient}
      />
      <Stack.Screen
        name="TabBar"
        component={TabBarNavigation}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  )
}
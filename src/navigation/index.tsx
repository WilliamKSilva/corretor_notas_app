import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import ListClient from "../screens/ListClient";
import RegisterClient from "../screens/RegisterClient";

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="RegisterClient"
          component={RegisterClient}
          options={{
            headerShown: false,
            title: "Registrar Clientes"
          }}
        />
        <Tab.Screen
          name="ListClient"
          component={ListClient}
          options={{
            headerShown: false,
            title: "Listar Clientes"
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}
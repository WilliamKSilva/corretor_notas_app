import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import ListClient from "../screens/ListClient";
import RegisterClient from "../screens/RegisterClient";
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from "styled-components/native";

const Tab = createBottomTabNavigator();

export default function Navigation() {
  const { colors, fontsize } = useTheme();

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="RegisterClient"
          component={RegisterClient}
          options={{
            headerShown: false,
            title: "Cadastro",
            tabBarIcon: () => {
              return <Ionicons name="person-add" size={25} color={colors.primary} />
            },
            tabBarIconStyle: {
              marginTop: 4
            },
            tabBarLabelStyle: {
              padding: 5,
              fontWeight: '600',
              fontSize: 15,
              color: colors.black
            },
            tabBarStyle: {
              height: 65,
              backgroundColor: colors.white
            }
          }}
        />
        <Tab.Screen
          name="ListClient"
          component={ListClient}
          options={{
            headerShown: false,
            title: "Clientes",
            tabBarIcon: () => {
              return <Ionicons name="list" size={25} color={colors.primary} />
            },
            tabBarIconStyle: {
              marginTop: 4
            },
            tabBarLabelStyle: {
              padding: 5,
              fontWeight: '600',
              fontSize: 15,
              color: colors.black
            },
            tabBarStyle: {
              height: 65,
              backgroundColor: colors.white
            }
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}
import * as React from 'react';
import { Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';

import LoginPage from "./LoginPage.js";
import NewsPage from "./NewsPage.js";
import TreatmentPage from "./TreatmentPage.js";
import InfoPage from "./InfoPage.js";
import TrialsPage from "./TrialsPage.js"
import SettingPage from "./SettingPage.js"

const Tab = createBottomTabNavigator();
export function NavigationTab() {
  return(
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'News') {
            iconName = 'ios-list-box';
          } else if (route.name === 'Treatment') {
            iconName = 'ios-beaker';
          } else if (route.name === 'Trials') {
            iconName = 'md-medkit';
          }else if (route.name === 'Info') {
            iconName = focused ? 'ios-information-circle' : 'ios-information-circle-outline';
          }else if (route.name === 'Setting') {
            iconName = 'ios-settings';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}
    >
      <Tab.Screen name="News" component={NewsPage} />
      <Tab.Screen name="Treatment" component={TreatmentPage} />
      <Tab.Screen name="Trials" component={TrialsPage} />
      <Tab.Screen name="Info" component={InfoPage} />
      <Tab.Screen name="Setting" component={SettingPage} />
    </Tab.Navigator>
  )
}

const Stack = createStackNavigator()

export default function App() {
  const [user, setUser] = React.useState(null);
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginPage} />
        <Stack.Screen name="Landing" component={NavigationTab} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
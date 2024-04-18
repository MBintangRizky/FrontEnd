import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home } from '../screens';
import { AccountTab, HomeTab, SearchTab } from '../screens/BottomTabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const  AppNavigation= () => {
  function MyStack() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Tabs" component={MyTab} />
      </Stack.Navigator>
    );
  }
 
  function MyTab() {
    return (
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeTab} options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
          headerShown: false,
        }}/>
        <Tab.Screen name="Search" component={SearchTab} options={{
          tabBarLabel: 'Periksa',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="medical-bag" color={color} size={size} />
          ),
          headerShown: false,
        }}/>
        <Tab.Screen name="Profile" component={AccountTab} options={{
          tabBarLabel: 'Profil',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account-circle" color={color} size={size} />
          ),
          headerShown: false,
        }}/>
      </Tab.Navigator>
    );
  }

  return (
    <NavigationContainer>
      <MyTab />
    </NavigationContainer>
  )
}

export default AppNavigation

const styles = StyleSheet.create({})
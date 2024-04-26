import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeTab, ProjectTab, ProfileTab, AccountTab } from '../screens/BottomTabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const AppNavigation = () => {
  const ProjectStack = () => (
    <Stack.Navigator>
      <Stack.Screen name="ProjectTab" component={ProjectTab} options={{ headerShown: false }} />
    </Stack.Navigator>
  );

  return (
    <NavigationContainer>
      <Tab.Navigator 
      screenOptions={{tabBarHideOnKeyboard: true}}>
        <Tab.Screen 
          name="BMI" 
          component={HomeTab} 
          options={{
            tabBarLabel: 'BMI',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="calculator" color={color} size={size} />
            ),
            headerShown: false,
            tabBarShowLabel: false,
          }}
        />
        <Tab.Screen 
          name="Profile" 
          component={AccountTab} 
          options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="account" color={color} size={size} />
            ),
            headerShown: false,
            tabBarShowLabel: false,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;

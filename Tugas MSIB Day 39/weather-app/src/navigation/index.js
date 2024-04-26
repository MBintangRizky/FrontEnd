import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeTab, ProjectTab, ProfileTab, SearchTab } from '../screens/BottomTabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const AppNavigation = () => {
  const ProjectStack = () => (
    <Stack.Navigator>
      <Stack.Screen name="ProjectTab" component={ProjectTab} options={{ headerShown: false }} />
      <Stack.Screen name="Detail" component={DetailProject} />
    </Stack.Navigator>
  );

  return (
    <NavigationContainer>
      <Tab.Navigator 
      screenOptions={{tabBarHideOnKeyboard: true}}>
        <Tab.Screen 
          name="project"
          component={ProjectTab} 
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={color} size={size} />
            ),
            tabBarShowLabel: false,
            headerShown: false,
          }}
        />
        <Tab.Screen 
          name="Search" 
          component={SearchTab} 
          options={{
            tabBarLabel: 'Search',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="magnify" color={color} size={size} />
            ),
            headerShown: false,
            tabBarShowLabel: false,
          }}
        />
        <Tab.Screen 
          name="Profile" 
          component={ProfileTab} 
          options={{
            tabBarLabel: 'Search',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="account-outline" color={color} size={size} />
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

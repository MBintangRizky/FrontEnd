import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeTab, ProjectTab, SearchTab } from '../screens/BottomTabs';
import DetailProject from '../screens/DetailProject';
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
      <Tab.Navigator>
        <Tab.Screen 
          name="Home" 
          component={HomeTab} 
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={color} size={size} />
            ),
            headerShown: false,
          }}
        />
        <Tab.Screen 
          name="Project" 
          component={ProjectStack} 
          options={{
            tabBarLabel: 'Project',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="briefcase-outline" color={color} size={size} />
            ),
            headerShown: false,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;

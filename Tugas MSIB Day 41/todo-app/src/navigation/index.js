import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AccountTab, HomeTab } from '../screens/BottomTabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AddTask from '../screens/AddTask';
import UpdateTask from '../screens/UpdateTask';
import AllTasks from '../screens/AllTasks';
import TodayTasksScreen from '../screens/TodayTasks';
import AllTasksScreen from '../screens/AllTasks';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const AppNavigation = () => {

  
  const HomeStack = () => (
    <Stack.Navigator>
      <Stack.Screen name="HomeTab" component={HomeTab} options={{ headerShown: false }} />
      <Stack.Screen name="TaskNew" component={AddTask} options={{headerTitle:"Tambah Tugas Baru"}}/>
      <Stack.Screen name="TaskUpdate" component={UpdateTask} options={{headerTitle:"Detail Tugas"}}/>
      <Stack.Screen name="AllTasks" component={AllTasksScreen} options={{headerTitle:"Semua Tugas"}}/>
      <Stack.Screen name="TodayTasks" component={TodayTasksScreen} options={{headerTitle:"Tugas Hari Ini"}}/>
    </Stack.Navigator>
  );



  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen 
          name="Home" 
          component={HomeStack} 
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={color} size={size} />
            ),
            headerShown: false,
            tabBarHideOnKeyboard:true,
          }}
        />

        <Tab.Screen 
          name="Profil" 
          component={AccountTab} 
          options={{
            tabBarLabel: 'Profil',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="account" color={color} size={size} />
            ),
            headerShown: false,
            tabBarHideOnKeyboard:true,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;

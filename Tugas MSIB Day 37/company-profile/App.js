import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Home } from './src/screens';
import AppNavigation from './src/navigation';

export default function App() {
  return (
    <AppNavigation />
    // <View style={styles.container}>
    //   <Text className="text-red-700">Company Profile 2</Text>
    //   <StatusBar style="auto" />
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

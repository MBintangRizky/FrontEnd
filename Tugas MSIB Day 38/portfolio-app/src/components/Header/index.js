import { StyleSheet, Text, View, Image, TouchableOpacity, Linking } from 'react-native'
import React from 'react'
import { WARNA_PRIMARY, WARNA_SECONDARY, WARNA_TERNARY } from '../../utils/constant'

const Header = () => {
  
  const handleContactMePress = () => {
    const phoneNumber = '081316522003';
    
    Linking.openURL(`tel:${phoneNumber}`);
  };

  return (
    <View className="flex my-5 mb-[-20px] flex-row justify-between items-center px-4">
      <View className="my-3">
        <Text className="font-bold text-2xl" style={{color:WARNA_TERNARY}}>BintangRizky</Text>
      </View>
      <View>
  
      <TouchableOpacity 
          className="flex flex-row items-center font-medium rounded-lg text-sm px-5 py-2.5" 
          style={{backgroundColor: WARNA_TERNARY}}
          onPress={handleContactMePress} 
        >
          <Text className="text-white">Contact Me</Text>
        </TouchableOpacity>

      </View>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({})
import { StyleSheet, Text, View, Image, TouchableOpacity, Linking } from 'react-native'
import React from 'react'
import { WARNA_PRIMARY, WARNA_SECONDARY, WARNA_TERNARY } from '../../utils/constant'

const Header = () => {
  
  const handleContactMePress = () => {
    const phoneNumber = '08111111111';
    
    Linking.openURL(`tel:${phoneNumber}`);
  };

  return (
    <View className="flex my-5 gap-x-2 flex-row justify-between items-center px-4">
      <View className="mt-2 mb-1 flex-shrink">
        <Text className="font-bold text-lg text-white">Ada 5 tugas yang harus diselesaikan! 📝</Text>
      </View>
      <View>

      <Image source={{uri: 'https://avatars.githubusercontent.com/u/147566794?v=4'}} width={50} height={50} borderRadius={50}/>
  
    
      </View>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({})
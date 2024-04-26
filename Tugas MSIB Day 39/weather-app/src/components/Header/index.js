import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native'
import React, {useState} from 'react'
import { WARNA_PRIMARY, WARNA_SECONDARY, WARNA_TERNARY } from '../../utils/constant';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';  

const Header = () => {
  
  return (
    <View>
      <View className='flex flex-row items-center justify-between mx-3 mt-5'>
        <View className="flex flex-col justify-start gap-1">
          <Text className="text-left text-2xl font-bold">Hello John,</Text>
          <Text className="text-lg">Cari informasi cuaca</Text>
        </View>
        <View className="flex flex-row items-center justify-start gap-2">
          <MaterialCommunityIcons name="web" color={WARNA_TERNARY} size={32} style={{backgroundColor: WARNA_SECONDARY, borderRadius: 50, padding: 8}} />
        </View>
      </View>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({})
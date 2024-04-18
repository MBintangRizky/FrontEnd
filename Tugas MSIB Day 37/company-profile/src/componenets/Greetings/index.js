import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { primaryColor } from '../../utils/constant'

const Greetings = () => {
  return (
    <View className="flex mt-5 mb-[-20px] flex-row justify-between items-center px-4">
      <View className="my-3">
        <Text className="text-gray-600">Selamat Datang Kembali, </Text>
        <Text className="font-bold text-2xl" style={{color:primaryColor}}>Mr. Rudi</Text>
      </View>
      <View>
        <Image source={{uri: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}} width={50} height={50} borderRadius={50}/>
      </View>
    </View>
  )
}

export default Greetings

const styles = StyleSheet.create({})
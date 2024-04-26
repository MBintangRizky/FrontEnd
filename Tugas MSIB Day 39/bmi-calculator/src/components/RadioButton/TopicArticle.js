import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { WARNA_PRIMARY, WARNA_TERNARY } from '../../utils/constant'

const TopicArticle = () => {
  return (
    <View className="flex flex-row items-center justify-evenly gap-2 mb-5">
      <Text className="px-3 py-2 rounded-full text-white" style={{backgroundColor:WARNA_TERNARY}}>Makanan</Text>
      <Text className="px-3 py-2 rounded-full text-white"style={{backgroundColor:WARNA_PRIMARY}}>Olahraga</Text>
      <Text className="px-3 py-2 rounded-full text-white" style={{backgroundColor:WARNA_TERNARY}}>Penyakit</Text>
      <Text className="px-3 py-2 rounded-full text-white" style={{backgroundColor:WARNA_TERNARY}}>Nutrisi</Text>
    </View>
  )
}

export default TopicArticle

const styles = StyleSheet.create({})
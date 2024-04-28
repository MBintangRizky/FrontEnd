import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { WARNA_PRIMARY } from '../utils/constant'
import TodayTask from '../components/TodayTask'


const TodayTasksScreen = () => {
  return (
    <View className="flex-1" style={{backgroundColor:WARNA_PRIMARY}}>
      <View className="mx-4">
        <Text className="text-lg text-white mt-4">Daftar Tugas Hari Ini</Text>
        <TodayTask />
      </View>
    </View>
  )
}

export default TodayTasksScreen

const styles = StyleSheet.create({})
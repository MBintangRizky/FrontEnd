import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { WARNA_PRIMARY } from '../utils/constant'
import TaskCard from '../components/Card/TaskCard'
import AllTasks from '../components/AllTask'


const AllTasksScreen = () => {
  return (
    <View className="flex-1" style={{backgroundColor:WARNA_PRIMARY}}>
      <View className="mx-4">
        <Text className="text-lg text-white mt-4">Daftar Semua Tugas</Text>
        <AllTasks />
      </View>
    </View>
  )
}

export default AllTasksScreen

const styles = StyleSheet.create({})
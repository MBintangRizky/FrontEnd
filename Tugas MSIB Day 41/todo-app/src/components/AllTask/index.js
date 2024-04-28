import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { WARNA_TERNARY } from '../../utils/constant'
import { allTasks } from '../../utils/data'
import TaskCard from '../Card/TaskCard'

const AllTasks = () => {
  return (
    <View>
      {/* <View className="flex flex-row items-center justify-between mt-3 mb-2.5">
        <Text className="text-white text-lg">Semua Tugas</Text>
        <Text style={{ color: WARNA_TERNARY }} className="text-sm">
          Lihat Semua
        </Text>
      </View> */}

      {allTasks.map((task, index) => (
        <TaskCard key={index} borderColor={task.borderColor}  title={task.title} date={task.date} status={task.status}/>
      ))}
    </View>
  )
}

export default AllTasks

const styles = StyleSheet.create({})
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { WARNA_PRIMARY, WARNA_SECONDARY, WARNA_TERNARY } from '../../utils/constant'
import * as Progress from 'react-native-progress';

const ProgressTask = () => {
  return (
    <View className="mt-3 flex flex-col mx-4">
      <View className="flex flex-row items-center justify-between mt-3 mb-2.5">
        <Text className="text-white text-lg">Progress</Text>
        <Text style={{ color: WARNA_TERNARY }} className="text-sm">Lihat Semua</Text>
      </View>

      <View style={{backgroundColor:WARNA_SECONDARY}} className="flex flex-col p-2 justify-start rounded-lg mt-3 mb-3">
        <Text className="text-white text-md font-semibold mb-2">Tugas Harian</Text>
        <Text className="text-gray-300 font-medium mb-2">2/3 Telah Selesai</Text>
        <Text className="text-sm font-normal mb-2" style={{color:WARNA_PRIMARY}}>Anda sebentar lagi akan menyelesaikannya!</Text>
        
         <Progress.Bar progress={0.6} width={null} height={12} borderRadius={6} color={WARNA_TERNARY} borderColor={WARNA_PRIMARY} unfilledColor='#6554AF' 
         />
     

      </View>
    </View>
  )
}

export default ProgressTask

const styles = StyleSheet.create({})
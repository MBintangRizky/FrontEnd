import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { primaryColor, secondaryColor } from '../../utils/constant';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const color = '#088F8F';
const colorPink = '#F88379';
const colorCadet ='#2AAA8A';
const size = 24;

const Service = () => {
  return (
    <View className="px-3">
        <View className="p-5" style={{backgroundColor:primaryColor, borderRadius:25}}>
          <View className="my-2 bg-white rounded-md flex flex-row items-center pl-5 py-5">
           <MaterialCommunityIcons name="phone" color={primaryColor} size={size}/>  
           <Text className="ml-5 text-[16px]" style={{color:primaryColor}}>Panggilan Darurat</Text>
          </View>
          <View className="my-2 bg-white rounded-md flex flex-row items-center pl-5 py-5">
           <MaterialCommunityIcons name="cellphone-information" color={color} size={size}/>  
           <Text className="ml-5 text-[16px]" style={{color:color}}>Informasi Penanganan Pertama</Text>
          </View>
          <View className="my-2 bg-white rounded-md flex flex-row items-center pl-5 py-5">
           <MaterialCommunityIcons name="hand-heart" color={colorPink} size={size}/>  
           <Text className="ml-5 text-[16px]" style={{color:colorPink}}>Bantu Teman</Text>
          </View>
          <View className="my-2 bg-white rounded-md flex flex-row items-center pl-5 py-5">
           <MaterialCommunityIcons name="hospital-marker" color={colorCadet} size={size}/>  
           <Text className="ml-5 text-[16px]" style={{color:colorCadet}}>Fasilitas Kesehatan Terdekat</Text>
          </View>
        </View> 
      </View>
  )
}

export default Service

const styles = StyleSheet.create({})
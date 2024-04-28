import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import { WARNA_PRIMARY, WARNA_SECONDARY, WARNA_TERNARY } from '../../utils/constant';

const Akun = () => {
  const navigation = useNavigation();
  return (
    <View className="flex-1 mt-5" style={{backgroundColor:WARNA_PRIMARY}}>

      <View className="flex-col mt-5 items-center mb-4 space-y-4">
        <Image source={{uri: 'https://avatars.githubusercontent.com/u/147566794?v=4'}} width={150} height={150} borderRadius={50}/>
        <View className="flex flex-col items-center">
          <Text className="text-lg font-bold" style={{color:WARNA_TERNARY}}>Bintang Rizky</Text>
          <Text className="text-md text-gray-200">Bintang</Text>
        </View>
      </View>


      <View className="w-full flex-col space-y-1 mt-5">
   
        <TouchableOpacity
          className="flex-row items-center justify-between p-4 rounded"
          onPress={() => navigation.navigate('EditProfil')}
          style={{backgroundColor:WARNA_SECONDARY}}
        >
          <View className="flex flex-row space-x-2">
            <Icon name="user" size={20} color={"white"} className="text-black mr-2" />
            <Text className="text-white flex-1">Edit Profil</Text>
          </View>
          <Icon name="angle-right" size={20} color={"white"} className="text-black" />
        </TouchableOpacity>

        <TouchableOpacity
          className="flex-row items-center justify-between p-4 rounded"
          onPress={() => navigation.navigate('UpdatePassword')}
          style={{backgroundColor:WARNA_SECONDARY}}
        >
          <View className="flex flex-row space-x-2">
            <Icon name="lock" size={20} color={"white"} className="text-black mr-2" />
            <Text className="text-white flex-1">Ubah Password</Text>
          </View>
          <Icon name="angle-right" size={20} color={"white"} className="text-black" />
        </TouchableOpacity>

        <TouchableOpacity
          className="flex-row items-center justify-between p-4 rounded"
          style={{backgroundColor:WARNA_SECONDARY}}
        >
          <View className="flex flex-row space-x-2">
            <Icon name="sign-out" size={20} color={"white"} className="text-black mr-2" />
            <Text className="text-white flex-1">Keluar</Text>
          </View>
          <Icon name="angle-right" size={20} color={"white"} className="text-black" />
        </TouchableOpacity>

      </View>
    </View>
  );
};

export default Akun;


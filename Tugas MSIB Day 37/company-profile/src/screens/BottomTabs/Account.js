import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import { logo } from '../../assets';
import { primaryColor } from '../../utils/constant';

const Akun = () => {
  const navigation = useNavigation();
  const [userRole, setUserRole] = useState('');
  const[name, setName] = useState('');
  const [username, setUsername] = useState('');

  return (
    <View className="flex mt-[50]">
      {/* Top div with user image and name */}
      <View className="flex-col items-center mb-4 space-y-4">
        <Image source={{uri: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}} width={150} height={150} borderRadius={50}/>
        <View className="flex flex-col items-center">
          <Text className="text-lg font-bold">{name}</Text>
          <Text className="text-md text-gray-600">{username}</Text>
        </View>
      </View>

      {/* Second div with buttons */}
      <View className="w-full flex-col space-y-1 mt-5">
        {/* Button 1 */}
        <TouchableOpacity
          className="flex-row items-center justify-between bg-white p-4 rounded"
          onPress={() => navigation.navigate('EditProfil')}
        >
          <View className="flex flex-row space-x-2">
            <Icon name="user" size={20} color={primaryColor} className="text-black mr-2" />
            <Text className="text-black flex-1">Edit Profil</Text>
          </View>
          <Icon name="angle-right" size={20} color={primaryColor} className="text-black" />
        </TouchableOpacity>

        {/* Button 2 */}
        <TouchableOpacity
          className="flex-row items-center justify-between bg-white p-4 rounded"
          onPress={() => navigation.navigate('UpdatePassword')}
        >
          <View className="flex flex-row space-x-2">
            <Icon name="lock" size={20} color={primaryColor} className="text-black mr-2" />
            <Text className="text-black flex-1">Ubah Password</Text>
          </View>
          <Icon name="angle-right" size={20} color={primaryColor} className="text-black" />
        </TouchableOpacity>

        <TouchableOpacity
          className="flex-row items-center justify-between bg-white p-4 rounded"
          
        >
          <View className="flex flex-row space-x-2">
            <Icon name="sign-out" size={20} color={primaryColor} className="text-black mr-2" />
            <Text className="text-black flex-1">Keluar</Text>
          </View>
          <Icon name="angle-right" size={20} color={primaryColor} className="text-black" />
        </TouchableOpacity>

        {/* Add more buttons as needed */}
      </View>
    </View>
  );
};

export default Akun;


import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { WARNA_PRIMARY, WARNA_SECONDARY, WARNA_TERNARY } from '../../utils/constant'
import { useNavigation } from '@react-navigation/native';
import { yoga } from '../../assets';


const Card = ({title, imgLink, desc}) => {
  const navigation = useNavigation();

  const handleDetailPress = () => {
    navigation.navigate('Detail', { title, imgLink, desc});
  };


  return (
    <View className="flex flex-row items-center mt-3 mb-5 justify-between p-2 rounded-xl" style={{backgroundColor:WARNA_TERNARY}}>
          
        <View className="flex-1 p-4">
          <Text 
            numberOfLines={3} 
            className="text-xl text-pretty text-white" 
            style={{maxWidth: '80vw'}}
          >
            Artikel Menarik Buat Kamu: 
          </Text>
          <Text className="text-md my-2" style={{color: WARNA_SECONDARY}}>
            Manfaat melakukan yoga
          </Text>
          <TouchableOpacity className="mt-2" onPress={handleDetailPress}>
            <Text className="text-left text-gray-800 text-sm italic">Ketuk untuk baca</Text>
          </TouchableOpacity>
        </View>
          
          <Image source={yoga} style={{width:100, height:100}}/>
    </View>
  )
}

export default Card

const styles = StyleSheet.create({})
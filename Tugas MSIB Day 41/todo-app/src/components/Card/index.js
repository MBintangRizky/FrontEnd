import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { WARNA_SECONDARY, WARNA_TERNARY } from '../../utils/constant'
import { useNavigation } from '@react-navigation/native';

const Card = ({title, imgLink, desc}) => {
  const navigation = useNavigation();

  const handleDetailPress = () => {
    navigation.navigate('Detail', { title, imgLink, desc});
  };


  return (
    <View className="flex flex-row items-center my-2 justify-between p-2 rounded-md" style={{backgroundColor:WARNA_TERNARY}}>
          
        <View style={{flex: 1}}>
          <Text 
            numberOfLines={3} 
            className="text-xl text-pretty" 
            style={{color: WARNA_SECONDARY, maxWidth: '80vw'}}
          >
            {title}
          </Text>
          <TouchableOpacity className="mt-2" onPress={handleDetailPress}>
            <Text className="p-2 rounded-md w-1/3 text-center font-bold text-white" style={{backgroundColor:WARNA_SECONDARY}}>Detail</Text>
          </TouchableOpacity>
        </View>
          
          <Image source={{uri: imgLink}} width={150} height={100}/>
  
    </View>
  )
}

export default Card

const styles = StyleSheet.create({})
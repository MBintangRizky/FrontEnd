import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import { WARNA_PRIMARY, WARNA_TERNARY } from '../utils/constant';

const DetailProject = ({ route }) => {
  const { title, imgLink, desc } = route.params; 

  return (
    <View className="flex-1 items-center px-2" style={{backgroundColor:WARNA_PRIMARY}}>

      <Image className="mt-5" source={{ uri: imgLink }} style={{ width: 300, height: 200 }} />
      
      <Text style={{color:WARNA_TERNARY}} className="text-3xl text-center my-5">"{title}"</Text>
      
      <Text className="font-medium text-lg text-white px-2 text-justify">
        {desc}
      </Text>
    </View>
  );
}

export default DetailProject;

const styles = StyleSheet.create({});

import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, TextInput } from 'react-native';

import Card from '../../components/Card';
import Header from '../../components/Header';

const Project = () => {

  return (
    <ScrollView className="mt-5 mx-3">
      <Header />
      
      <Card  kota={"Jakarta Timur"}/>
      

      <View className="mx-3 my-5">
        <Text className="text-xl font-bold">Eksplor wilayah lainnya</Text>
      </View>
      <Card kota={"Jakarta Barat"}/>
      <Card kota={"Jakarta Selatan"}/>
      <Card kota={"Jakarta Utara"}/>
 

    </ScrollView>
  );
};

export default Project;

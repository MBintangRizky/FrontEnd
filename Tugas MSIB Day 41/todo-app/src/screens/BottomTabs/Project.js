import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { WARNA_PRIMARY, WARNA_SECONDARY, WARNA_TERNARY } from '../../utils/constant';
import Card from '../../components/Card';
import { myProjectData } from '../../utils/data';

const Project = () => {

  return (
    <ScrollView className="flex px-3 mt-5" style={{backgroundColor: WARNA_PRIMARY}}>
      <Text className="mt-5 text-3xl uppercase underline" style={{color:WARNA_TERNARY}}>My Project</Text>

      <View className="mt-5">
        {
          myProjectData.map((project, index) => (
            <Card key={index} title={project.title} imgLink={project.imageUrl} desc={project.desc} />
          ))
        }
  
      </View>
    </ScrollView>
  );
};

export default Project;


import React from 'react';
import { StyleSheet, Text, View, Dimensions, ScrollView, TouchableOpacity } from 'react-native';
import { WARNA_PRIMARY, WARNA_SECONDARY, WARNA_TERNARY } from '../../utils/constant';
import Header from '../../components/Header';
import SearchHeader from '../../components/Header/SearchHeader';
import ProgressTask from '../../components/Progress';
import TodayTask from '../../components/TodayTask';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';
import AllTasks from '../../components/AllTask';

const Home = () => {
  const navigation = useNavigation();

  const navigateToAddTask = () => {
    navigation.navigate('TaskNew');
  };
  
  const navigateToAllTasksScreen = () => {
    navigation.navigate('AllTasks');
  };
  
  const navigateToTodayTasks = () => {
    navigation.navigate('TodayTasks');
  }

  return (
    <ScrollView className="relative flex-1 mt-5" style={{backgroundColor: WARNA_PRIMARY}}>
      <Header />
      <SearchHeader />
      <ProgressTask />


      <View className="mt-2 flex flex-col mx-4">
        <View className="flex flex-row items-center justify-between mt-3 mb-2.5">
          <Text className="text-white text-lg">Tugas Hari Ini</Text>
          <TouchableOpacity onPress={navigateToTodayTasks}>
            
            <Text style={{ color: WARNA_TERNARY }} className="text-sm">
              Lihat Semua
            </Text>
          </TouchableOpacity>
        </View>
      
        <TodayTask />

      </View>

      <View className="mt-2 flex flex-col mx-4">
        <View className="flex flex-row items-center justify-between mt-3 mb-2.5">
          <Text className="text-white text-lg">Semua Tugas</Text>
          <TouchableOpacity onPress={navigateToAllTasksScreen}>
            
            <Text style={{ color: WARNA_TERNARY }} className="text-sm">
              Lihat Semua
            </Text>
          </TouchableOpacity>
        </View>
      
        <AllTasks />

      </View>

      <TouchableOpacity
        className="absolute right-[35px] bottom-[30px] rounded-full p-2"
        onPress={navigateToAddTask}
        style={{backgroundColor:WARNA_TERNARY}}
      >
        <MaterialCommunityIcons name='plus' size={36} color={"white"} />
      </TouchableOpacity>


    </ScrollView>
  );
};

const styles = StyleSheet.create({

});

export default Home;

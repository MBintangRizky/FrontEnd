import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { WARNA_TERNARY } from '../../utils/constant';
import TaskCard from '../Card/TaskCard';
import { todayTask } from '../../utils/data';


const TodayTask = () => {
  return (
    <View>

      {todayTask.map((task, index) => (
        <TaskCard key={index} borderColor={task.borderColor}  title={task.title} date={task.date} status={task.status} desc={task.desc} order={task.order}/>
        
      ))}

     

    </View>
  );
};

export default TodayTask;

const styles = StyleSheet.create({});

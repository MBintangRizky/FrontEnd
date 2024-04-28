import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, {useState, useEffect} from 'react'
import Checkbox from 'expo-checkbox';
import { WARNA_PRIMARY, WARNA_SECONDARY, WARNA_TERNARY } from '../../utils/constant';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';

const TaskCard = ({borderColor, title, date, status, desc, order}) => {
  const [isChecked, setChecked] = useState(false);
  const navigation = useNavigation();

  useEffect(() => {
    setChecked(status);
  }, [status]);

  const handleCardPress = () => {
    navigation.navigate('TaskUpdate', {
      title: {title},
      description: {desc},
      date: {date},
      order: {order}
    });
    
  };

  return (
    <TouchableOpacity
        onPress={handleCardPress}
        className={`flex flex-row items-center justify-between border-l-[16px] rounded-lg p-3 my-2.5`}
        style={{ backgroundColor: WARNA_SECONDARY, borderLeftColor: borderColor }}
      >
        <View className="flex flex-col justify-start gap-y-2">
          <Text className="text-white uppercase text-md">{title}</Text>
          <View className="flex flex-row items-center justify-start gap-x-2">
            <MaterialCommunityIcons name="calendar-check" color={'white'} size={24} />
            <Text className="text-white">{date}</Text>
          </View>
        </View>

        <View>
        <Checkbox
          value={isChecked}
          onValueChange={setChecked}
          color={isChecked ? '#4630EB' : WARNA_PRIMARY}
        />
        </View>
      </TouchableOpacity>
  )
}

export default TaskCard

const styles = StyleSheet.create({})
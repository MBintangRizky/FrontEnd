import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Switch, Button } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native'; // Import navigation hooks
import { WARNA_PRIMARY, WARNA_SECONDARY, WARNA_TERNARY } from '../utils/constant';
import { Calendar, LocaleConfig } from 'react-native-calendars';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import moment from 'moment';
import PriorityButton from '../components/PriorityButton';

const UpdateTask = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const { title, description, date, order } = route.params;

  const [selectedDate, setSelectedDate] = useState(date ? moment(date).format('DD MMMM YYYY') : '');
  const [showCalendar, setShowCalendar] = useState(false);
  const [isEnabled, setIsEnabled] = useState(false);
  const [option, setOption] = useState(null);
  const data = [
    { value: 'Tinggi', order: 1 },
    { value: 'Menengah', order: 2 },
    { value: 'Rendah', order: 3 },
  ];

  const toggleCalendar = () => {
    setShowCalendar(!showCalendar);
  };

  const handleDateChange = (day) => {
    const formattedDate = moment(day.dateString, 'YYYY-MM-DD').format('DD MMMM YYYY');
    setSelectedDate(formattedDate);
  };
  

  const toggleSwitch = () => {
    setIsEnabled((previousState) => !previousState);
    // console.log(order);
  };

  return (
    <View className="flex-1 pt-5" style={{ backgroundColor: WARNA_PRIMARY }}>
      <View className="flex flex-row items-center justify-center mt-3">
        <TouchableOpacity onPress={toggleCalendar}>
          <MaterialCommunityIcons name="calendar" color={WARNA_TERNARY} size={32} />
        </TouchableOpacity>
        <Text className="text-xl mb-0 ml-3" style={{ color: WARNA_TERNARY }}>
          {selectedDate ? selectedDate : 'Select Date'}
        </Text> 
      </View>

      {showCalendar && (
        <View
          className="mx-5"
          style={{ position: 'absolute', top: 70, left: 0, right: 0, bottom: 0, zIndex: 1 }}
        >
          <Calendar
            onDayPress={handleDateChange}
            markedDates={{
              [moment(selectedDate).format('YYYY-MM-DD')]: { selected: true, disableTouchEvent: true, selectedDotColor: 'orange' },
            }}
          />
        </View>
      )}

      <View className="mt-2 flex mx-4">
        <View className="flex flex-col justify-between mt-3 mb-2.5">
          <Text className="text-white text-lg">Tugas Baru</Text>
          <TextInput
            defaultValue={title.title}
            className="bg-gray-600 text-white rounded-lg p-2 mt-4 mb-2"
            placeholder="Judul"
            placeholderTextColor={'white'}
          />
          <TextInput
            defaultValue={description.desc}
            className="bg-gray-600 text-white rounded-lg px-2 my-1"
            placeholder="Deskripsi"
            placeholderTextColor={'white'}
            numberOfLines={6}
          />


        </View>
      </View>

      <View className="mt-2 flex flex-col mx-4">
        <Text className="text-white text-lg">Prioritas</Text>
        <View className="flex flex-row items-center justify-center mt-2.5">
          <PriorityButton data={data} onSelect={(value) => setOption(value)} selectedOrder={order.order} />
        </View>
      </View>



      <View className="mt-4 flex flex-row justify-between items-center mx-4">
        <Text className="text-white text-lg">Nyalakan Pengingat</Text>
        <Switch
          trackColor={{ false: '#767577', true: '#81b0ff' }}
          thumbColor={isEnabled ? WARNA_TERNARY : WARNA_SECONDARY}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>

      <View className="absolute bottom-10 left-0 right-0">
        <View className="flex flex-row items-center justify-center gap-x-2">
          <TouchableOpacity
            className="px-3 py-2 rounded-md"
            style={{ backgroundColor: WARNA_TERNARY }}
          >
            <Text className="text-white text-lg uppercase text-center">Update Tugas</Text>
          </TouchableOpacity>
          <TouchableOpacity
            className="px-3 py-2 rounded-md"
            style={{ backgroundColor: WARNA_SECONDARY }}
          >
            <Text className="text-white uppercase text-lg text-center">Hapus Tugas</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
});

export default UpdateTask;

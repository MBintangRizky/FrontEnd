import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Switch, Button } from 'react-native';
import { WARNA_PRIMARY, WARNA_SECONDARY, WARNA_TERNARY } from '../utils/constant';
import { Calendar, LocaleConfig } from 'react-native-calendars';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import moment from 'moment';
import PriorityButton from '../components/PriorityButton';
// import DateTimePicker from '@react-native-community/datetimepicker';
// import DateTimePickerModal from "react-native-modal-datetime-picker";

const AddTask = () => {
  const [date, setDate] = useState(new Date());
  const [from] = useState(moment().subtract(3, 'days').toDate());
  const [till] = useState(moment().add(3, 'days').toISOString());
  const [showCalendar, setShowCalendar] = useState(false);
  const [selected, setSelected] = useState('');
  const today = new Intl.DateTimeFormat('id-ID', { day: 'numeric', month: 'long', year: 'numeric' }).format(
    selected ? new Date(selected) : date
  );

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const [option, setOption] = useState(null);
  const data = [
    { value: 'Tinggi', order: 1 },
    { value: 'Menengah', order: 2 },
    { value: 'Rendah', order: 3 },
  ];

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    console.warn("A date has been picked: ", date);
    hideDatePicker();
  };

  LocaleConfig.locales['id'] = {
    monthNames: [
      'Januari',
      'Februari',
      'Maret',
      'April',
      'Mei',
      'Juni',
      'Juli',
      'Agustus',
      'September',
      'Oktober',
      'November',
      'Desember',
    ],
    monthNamesShort: [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'Mei',
      'Jun',
      'Jul',
      'Agu',
      'Sep',
      'Okt',
      'Nov',
      'Des',
    ],
    dayNames: ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'],
    dayNamesShort: ['Min', 'Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab'],
    today: 'Hari Ini',
  };
  LocaleConfig.defaultLocale = 'id';

  const toggleCalendar = () => {
    setShowCalendar(!showCalendar);
  };

  const handleDateChange = (day) => {
    setSelected(day.dateString);
    setDate(new Date(day.dateString));
  };

  return (
    <View className="flex-1 pt-5" style={{ backgroundColor: WARNA_PRIMARY }}>


      <View className="flex flex-row items-center justify-center mt-3">
        <TouchableOpacity
            onPress={toggleCalendar}
            >
            <MaterialCommunityIcons name='calendar' color={WARNA_TERNARY} size={32}/>
          </TouchableOpacity>
        <Text className="text-xl mb-0 ml-3" style={{color:WARNA_TERNARY}}>{today}</Text>
      </View>

      {showCalendar && (
        <View className="mx-5" style={{ position: 'absolute', top: 70, left: 0, right: 0, bottom: 0, zIndex: 1 }}>
          <Calendar
            onDayPress={handleDateChange}
            markedDates={{
              [selected]: { selected: true, disableTouchEvent: true, selectedDotColor: 'orange' },
            }}
          />
        </View>
      )}

      <View className="mt-2 flex mx-4">
          <View className="flex flex-col justify-between mt-3 mb-2.5">
            <Text className="text-white text-lg">Tugas Baru</Text>
            <TextInput className="bg-gray-600 rounded-lg p-2 mt-4 mb-2" placeholder='Judul' placeholderTextColor={"white"}/>
            <TextInput className="bg-gray-600 rounded-lg px-2 my-1" placeholder='Deskripsi' placeholderTextColor={"white"} numberOfLines={6} />
          
          </View>          
      </View>

      
      <View className="mt-2 flex flex-col mx-4">
          <Text className="text-white text-lg">Prioritas</Text>
          <View className="flex flex-row items-center justify-center mt-2.5">
            <PriorityButton data={data} onSelect={(value) => setOption(value)}/>
            {/* <Text className="text-white">Pilihan: {option}</Text> */}
          </View>
      </View>

      <View className="mt-4 flex flex-row justify-between items-center mx-4">
        <Text className="text-white text-lg">Nyalakan Pengingat</Text>
          <Switch
          trackColor={{false: '#767577', true: '#81b0ff'}}
          thumbColor={isEnabled ? WARNA_TERNARY : WARNA_SECONDARY}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>

      <View className="absolute bottom-10 left-0 right-0 mx-4">
        <TouchableOpacity className="px-3 py-2 rounded-md" style={{backgroundColor:WARNA_TERNARY}}>
            <Text className="text-white text-lg uppercase text-center">Tambah Tugas</Text>
          </TouchableOpacity>
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

export default AddTask;

import { StyleSheet, Text, View, TouchableOpacity, TextInput, Button } from 'react-native'
import React, {useState} from 'react'
import { WARNA_PRIMARY, WARNA_SECONDARY, WARNA_TERNARY } from '../../utils/constant';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';  

const SearchHeader = () => {

  // const [searchVisible, setSearchVisible] = useState(false);
  // const [searchQuery, setSearchQuery] = useState('');

  // const handleSearchIconClick = () => {
  //   setSearchVisible(!searchVisible);
  // };

  // const handleSearchInputChange = (text) => {
  //   setSearchQuery(text);
  // };
  

  // const handleSearchSubmit = async () => {
  //   try {
  //     onWeatherData(null);
  //     loading(true);

  //     if(searchQuery.length === 0){
  //       loading(false);
  //       return;
  //     }

  //     const response = await fetch(`https://weather-api-tau-six.vercel.app/weather/${encodeURIComponent(searchQuery)}`);
  //     const data = await response.json();
  //     // setWeatherData(data);

  //     if (data.error) {
  //       loading(false);
  //       isNotFound(true);
  //       return;
  //     }
  //     onWeatherData(data);
  //     loading(false);

  //   } catch (error) {
  //     console.error('Error fetching data:', error);
  //     loading(false);
  //   }
  // };

  return (
    <View className="flex flex-row items-center justify-between mx-3 rounded-lg px-2" style={{backgroundColor: WARNA_SECONDARY}}>
      <MaterialCommunityIcons name="magnify" color={"white"} size={32} />
      <TextInput
        placeholder="Cari tugas ..."
        placeholderTextColor="white"
        // onChangeText={handleSearchInputChange}
        className="px-4 py-2 rounded-lg w-full -ml-2" 
      />
    </View>
    
  )
}

export default SearchHeader

const styles = StyleSheet.create({})
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Button } from 'react-native'
import React, {useState} from 'react'
import { WARNA_PRIMARY, WARNA_SECONDARY, WARNA_TERNARY } from '../../utils/constant';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';  

const SearchHeader = ({ onWeatherData, loading, isNotFound }) => {

  const [searchVisible, setSearchVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchIconClick = () => {
    setSearchVisible(!searchVisible);
  };

  const handleSearchInputChange = (text) => {
    setSearchQuery(text);
  };
  

  const handleSearchSubmit = async () => {
    try {
      onWeatherData(null);
      loading(true);

      if(searchQuery.length === 0){
        loading(false);
        return;
      }

      const response = await fetch(`https://weather-api-tau-six.vercel.app/weather/${encodeURIComponent(searchQuery)}`);
      const data = await response.json();
      // setWeatherData(data);

      if (data.error) {
        loading(false);
        isNotFound(true);
        return;
      }
      onWeatherData(data);
      loading(false);
      // const datas = data.data.forecast.area;

      // for (let i = 0; i < 5; i++) {
      //   const namaKota = datas[i].name[0]
      //   onWeatherData(data); 
      // }
    } catch (error) {
      console.error('Error fetching data:', error);
      loading(false);
    }
  };

  return (
    <View>
      <View className='flex flex-row items-center justify-between mx-3 mt-5'>
        <View className="flex flex-col justify-start gap-1">
          <Text className="text-left text-2xl font-bold">Akses Cepat</Text>
          <Text className="text-lg">Informasi Cuaca Provinsi</Text>
        </View>
        <View className="flex flex-row items-center justify-start gap-2">
          <TouchableOpacity onPress={handleSearchIconClick}>
            <MaterialCommunityIcons name="magnify" color={WARNA_TERNARY} size={32} style={{backgroundColor: WARNA_SECONDARY, borderRadius: 50, padding: 8}} />
          </TouchableOpacity>
        </View>
      </View>

      {searchVisible && (
        <View className="flex flex-row items-center justify-between my-3 mx-3">
          <TextInput
            placeholder="Cari..."
            value={searchQuery}
            onChangeText={handleSearchInputChange}
            className="px-4 py-2 bg-gray-200 rounded-lg w-10/12"
          />
          <Button 
            title='Kirim'
            color={WARNA_SECONDARY}
            onPress={handleSearchSubmit}
          />
        </View>
      )}
    </View>
  )
}

export default SearchHeader

const styles = StyleSheet.create({})
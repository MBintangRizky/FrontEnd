// Search.js
import React, { useState } from 'react';
import { View, Image, ScrollView, Text, ActivityIndicator } from 'react-native';
import SearchHeader from '../../components/Header/SearchHeader';
import WeatherCard from '../../components/Card/WeatherCard';
import { location, not_found } from '../../assets';
import { WARNA_PRIMARY } from '../../utils/constant';
import { isEmpty } from 'lodash'; 

const Search = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isNotFound, setIsNotFound] = useState(false);

  const handleWeatherData = (data) => {
    setWeatherData(data);
    setLoading(false);
    setIsNotFound(false);
  };

  return (
    <ScrollView className="flex mt-5 mx-3">
      <SearchHeader onWeatherData={handleWeatherData} loading={setLoading} isNotFound={setIsNotFound} />

      {isNotFound && <>
        <View>
          <Text className="text-lg text-center font-bold text-red-500">Provinsi tidak ditemukan</Text>
        </View>
      </>}

      <View className="mt-10 mx-3">
        {loading ? (
          <View className="flex-1 justify-center items-center">
            <ActivityIndicator size="large" color={WARNA_PRIMARY} />
          </View>
        ) : (
          isEmpty(weatherData) ? (
            <View className="flex flex-col justify-center items-center">
              <Image source={location} style={{ width: 250, height: 250 }} />
              <Text className="text-lg mt-3" style={{ color: WARNA_PRIMARY}}>Cari cuaca di berbagai provinsi</Text>
            </View>
          ) : (
            weatherData.data.forecast.area.slice(0, 5).map((area) => (
              <WeatherCard
                key={area.name[0]}
                kota={area.name[0]}
                temperature={area.parameter[5].timerange[0].value[0].text}
                weatherIcon={area.parameter[6].timerange[0].value[0].text}
                humidity={area.parameter[0].timerange[0].value[0].text}
                windDirection={area.parameter[7].timerange[0].value[0].text}
              />
            ))
          )
        )}
      </View>
    </ScrollView>
  );
};

export default Search;

// WeatherCard.js
import React from 'react';
import { View, Text, Image } from 'react-native';
import { WARNA_PRIMARY, WARNA_SECONDARY, WARNA_TERNARY } from '../../utils/constant';
import { w_0, w_1, w_2, w_3, w_4, w_5, w_10, w_45, w_60, w_61, w_63, w_80, w_95, w_97 } from '../../assets';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const WeatherCard = ({ kota, temperature, weatherIcon, humidity, windDirection }) => {
  const getWeatherIcon = (weatherIcon) => {
    switch (weatherIcon) {
      case '0':
        return w_0;
      case '1':
        return w_1;
      case '2':
        return w_2;
      case '3':
        return w_3;
      case '4':
        return w_4;
      case '5':
        return w_5;
      case '10':
        return w_10;
      case '45':
        return w_45;
      case '60':
        return w_60;
      case '61':
        return w_61;
      case '63':
        return w_63;
      case '80':
        return w_80;
      case '95':
        return w_95;
      case '97':
        return w_97;
      default:
        return null;
    }
  };

  return (

    <View className="flex flex-row items-center my-2 justify-between p-2 rounded-xl" style={{backgroundColor:WARNA_PRIMARY}}>
            
        <View className="flex-1 p-4">
          
          <Text className="text-3xl my-2" style={{color: WARNA_TERNARY}}>
            {kota}
          </Text>
          <View className="flex flex-row items-center justify-start -ml-3">
              {humidity && <>
                <MaterialCommunityIcons name="water" color={WARNA_TERNARY} size={32} style={{backgroundColor: WARNA_PRIMARY, borderRadius: 50, padding: 8}} />
              <Text className="text-md" style={{color:WARNA_TERNARY}}>{humidity} %</Text>
              </>}
              
              {windDirection && <>
                <MaterialCommunityIcons name="navigation-variant" color={WARNA_TERNARY} size={32} style={{backgroundColor: WARNA_PRIMARY, borderRadius: 50, padding: 8}} />
              <Text className="text-md" style={{color:WARNA_TERNARY}}>{windDirection} {'\u00b0'}</Text>
              </>}
            
            </View>

        </View>
          
          <View className="flex flex-col items-center justify-evenly">
            {/* <Image source={{"weather" + weatherIcon}} style={{width:100, height:100}}/> */}
            {weatherIcon && <Image source={getWeatherIcon(weatherIcon)} style={{width:80, height:80}} />}
            <View className="flex flex-row items-center">
              <MaterialCommunityIcons name="thermometer" color={WARNA_TERNARY} size={32} style={{backgroundColor: WARNA_PRIMARY, borderRadius: 50, padding: 8}} />
              <Text className="text-md" style={{color:WARNA_TERNARY}}>{temperature} {'\u00b0'} C</Text>
            </View>
          </View>
    </View>

    
  );
};

export default WeatherCard;

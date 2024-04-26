import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React, {useEffect, useState} from 'react'
import { WARNA_PRIMARY, WARNA_SECONDARY, WARNA_TERNARY } from '../../utils/constant'
import { yoga, w_0, w_1, w_2, w_3, w_4, w_5, w_10, w_45, w_60, w_61, w_63, w_80, w_95, w_97 } from '../../assets';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';  


const Card = ({kota}) => {

  const [weatherData, setWeatherData] = useState(null);
  const [weatherIcon, setWeatherIcon] = useState(null);
  const [humidity, setHumidity] = useState(null);
  const [windDirection, setWindDirection] = useState(null);
  const [temperature, setTemperature] = useState(null);
  const [isLokasiTerkini, setLokasiTerkini] = useState(true);


  useEffect(() => {
    fetchWeatherData();
  }, []);

  const fetchWeatherData = async () => {
    try {
      const response = await fetch('https://weather-api-tau-six.vercel.app/weather/DKIJakarta');
      const data = await response.json();
      setWeatherData(data);

      // mendapatkan nama wilayah (kabupaten/kota) di provinsi
      const datas = data.data.forecast.area
      let data_kota;
      for  (let i = 0; i < datas.length; i++) { 
        if (datas[i].name[0] == kota) {
          data_kota = datas[i]
        } 
      }

      // Dapatkan temperature Celcius
      const temp = data_kota.parameter[5].timerange[0].value[0].text

      // Dapatkan Icon Cuaca
      const weatherIcon = data_kota.parameter[6].timerange[0].value[0].text


      // Dapatkan kelembaban
      const humidity = data_kota.parameter[0].timerange[0].value[0].text

      // Dapatkan arah angin
      const windDirection = data_kota.parameter[7].timerange[0].value[0].text


      setWeatherIcon(weatherIcon);
      setHumidity(humidity)
      setWindDirection(windDirection)
      setTemperature(temp)

      if (kota !== "Jakarta Timur") {
        setLokasiTerkini(false);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

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
    <View className="flex flex-row items-center m-2 justify-between p-2 rounded-xl" style={{backgroundColor:WARNA_PRIMARY}}>
          
        <View className="flex-1 p-4">
          {isLokasiTerkini && <Text 
            numberOfLines={3} 
            className="text-xl text-pretty text-white" 
            style={{maxWidth: '80vw'}}
          >
            Lokasi terkini 
          </Text>}
          
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
            {weatherIcon && <Image source={getWeatherIcon(weatherIcon)} style={{width:80, height:80}} />}
            <View className="flex flex-row items-center">
              <MaterialCommunityIcons name="thermometer" color={WARNA_TERNARY} size={32} style={{backgroundColor: WARNA_PRIMARY, borderRadius: 50, padding: 8}} />
              <Text className="text-md" style={{color:WARNA_TERNARY}}>{temperature} {'\u00b0'} C</Text>
            </View>
          </View>
    </View>
  )
}

export default Card

const styles = StyleSheet.create({})
import React from 'react';
import { StyleSheet, Text, View, Dimensions, Image, ScrollView } from 'react-native';
const { width } = Dimensions.get('window');
import { WARNA_PRIMARY, WARNA_SECONDARY, WARNA_TERNARY } from '../../utils/constant';
import Header from '../../components/Header';
import Timeline from 'react-native-timeline-flatlist'
import About from '../../components/About';

const Home = () => {
  const data = [
    {time: '2010', title: 'SDN 1 Karaton', description: 'Juara 3 Lomba mewarnai tingkat SD'},
    {time: '2015', title: 'SMPN 1 Pandeglang', description: 'Juara 2 Lomba Basket tingkat SMP'},
    {time: '2018', title: 'SMAN 1 Pandeglang', description: 'Mengikuti Ekstrakurikuler Palang Merah Remaja '},
    {time: '2021', title: 'Universitas Jenderal Achmad Yani', description: 'Jurusan Teknik Informatika (IPK: 3,18)'},
  ]

  return (
    <ScrollView className="flex-1 mt-5" style={{backgroundColor: WARNA_PRIMARY}}>
      <Header />
      <View className="flex flex-col items-center mt-[40px]"> 
          <Text className="mt-5 font-bold text-center text-3xl" style={{color: WARNA_TERNARY}}>
            Muhammad Bintang Rizky
          </Text> 
          <View style={styles.underline} />
      </View>

      <About />

      <View className="flex justify-center items-center">
        <Text className="text-white text-lg p-2 rounded-md mt-2 mb-5" style={{backgroundColor:WARNA_SECONDARY}}>
          Riwayat Pendidikan
        </Text>
        <Timeline 
            data={data}
            circleColor={WARNA_TERNARY}
            lineColor='rgb(45,156,219)'
            timeStyle={{textAlign: 'center', backgroundColor:'#344955', color:'white', padding:5, borderRadius:13}}
            descriptionStyle={{color:'gray'}}
            titleStyle={{color: WARNA_TERNARY }}
            style={{width:"85%"}}
            isUsingFlatlist={false}
            />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 5,
    backgroundColor: 'white',
  },
  wrapper: {
     
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    width: width - 40,
    height: 100,
    marginHorizontal: 20,
    borderRadius: 10,
    // backgroundColor: primaryColor,
    justifyContent: 'flex-start', 
    paddingHorizontal: 10, 
  },
  underline: {
    width: '80%',
    marginTop: 20,
    borderBottomWidth: 2,
    borderBottomColor: WARNA_TERNARY,
  },
});

export default Home;

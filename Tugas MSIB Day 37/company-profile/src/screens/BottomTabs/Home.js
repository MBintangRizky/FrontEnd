import React from 'react';
import { StyleSheet, Text, View, Dimensions, Image } from 'react-native';
import Greetings from '../../componenets/Greetings';
import Logo from '../../componenets/Logo';
import Service from '../../componenets/Service';
import Swiper from 'react-native-swiper';
import { primaryColor, secondaryColor, thirdColor } from '../../utils/constant';

const { width } = Dimensions.get('window');

const cards = [
  { text: 'Dr. Fizal' },
  { text: 'Dr. Richard' },
  { text: 'Dr. Abc' },
  { text: 'Dr. DEF' },
];

const Home = () => {
  return (
    <View style={styles.container}>
      <Greetings />
      <Logo />
      <Service />

      <Text className="ml-5 mt-2 font-bold text-lg" style={{color:primaryColor}}>
        Pemeriksaan Terakhir
      </Text>
      <Swiper
        className="mt-2"
        style={styles.wrapper}
        showsButtons={false}
        autoplay={true}
        loop={true}
      >
        {cards.map((card, index) => (
          <View key={index} style={styles.card}>
            <Image source={{uri: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}} width={50} height={50} borderRadius={50}/>
            <View>
              <Text className="text-white ml-5 text-[16px]">{card.text} (Dokter Umum)</Text>
              <Text className="text-white ml-5 text-[12px] text-gray-200">16 Maret 2024</Text>
            </View>
          </View>
        ))}
      </Swiper>
    </View>
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
    backgroundColor: primaryColor,
    justifyContent: 'flex-start', 
    paddingHorizontal: 10, 
  },
});

export default Home;

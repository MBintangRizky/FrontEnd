import React, {useState} from 'react';
import { StyleSheet, Text, View, Dimensions, Image, ScrollView, TextInput, TouchableOpacity, Button } from 'react-native';
const { width } = Dimensions.get('window');
import { WARNA_PRIMARY, WARNA_SECONDARY, WARNA_TERNARY } from '../../utils/constant';

import Timeline from 'react-native-timeline-flatlist';
import Card from '../../components/Card';
import RadioGender from '../../components/RadioButton/RadioGender';
import TopicArticle from '../../components/RadioButton/TopicArticle';
import Modal from "react-native-modal";
import ResultModal from '../../components/Modal';

const Home = () => {

  <View className="flex-1 items-center justify-center">
    <View className='flex flex-row items-center justify-center'>
      <View className="flex flex-col items-center justify-start gap-2">
        <Text>Hello Bintang,</Text>
        <Text>Cari informasi cuaca</Text>
      </View>
    </View>
    <Text>Tes</Text>
  </View>
};



export default Home;

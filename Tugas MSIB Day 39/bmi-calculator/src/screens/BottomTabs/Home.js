import React, {useState} from 'react';
import { StyleSheet, Text, View, Dimensions, Image, ScrollView, TextInput, TouchableOpacity, Button } from 'react-native';
const { width } = Dimensions.get('window');
import { WARNA_PRIMARY, WARNA_SECONDARY, WARNA_TERNARY } from '../../utils/constant';
import Timeline from 'react-native-timeline-flatlist'
import Card from '../../components/Card';
import RadioGender from '../../components/RadioButton/RadioGender';
import TopicArticle from '../../components/RadioButton/TopicArticle';
import Modal from "react-native-modal";
import ResultModal from '../../components/Modal';

const Home = () => {

  const [option, setOption] = useState(null);
  const data = [
    { value: 'Laki - Laki' },
    { value: 'Perempuan' },
  ];
  const [isModalVisible, setModalVisible] = useState(false);
  const [age, setAge] = useState('');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmiResult, setBmiResult] = useState(null);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const calculateBMI = () => {

    let bmi;
    const heightInMeters = parseFloat(height) / 100;

    if(option !== 'Laki - Laki' && option !== 'Perempuan') {
      setOption("Harap pilih jenis kelamin")
      return;
    } 
      

    if (option === 'Laki - Laki') {
      bmi = parseFloat(weight) / (heightInMeters * heightInMeters) + (0.03 * parseInt(age));
    }

    bmi =  parseFloat(weight) / (heightInMeters * heightInMeters) + (0.02 * parseInt(age));

    setBmiResult(bmi.toFixed(2)); 
    console.log(height);
    toggleModal(); 
  };

  return (
    <View className='flex-1 mx-5'>
      <View className="mt-20">
        <TopicArticle />
        <Card />


        <ResultModal isVisible={isModalVisible} toggleModal={toggleModal} bmiResult={bmiResult}/>
      </View>

      <View className="mt-3 mb-6">
        <Text className='text-2xl font-bold'>BMI Calculator</Text>
      </View>

      <View>
        <RadioGender data={data} onSelect={(value) => setOption(value)} />
        <Text> Jenis Kelamin: {option}</Text> 
      </View>

      <View className="my-3 flex flex-col justify-start">
        <View className="flex flex-row items-center justify-between my-3"> 
          <Text className="font-md font-bold">
            Usia:
          </Text>
          <TextInput
           keyboardType='numeric'
            className="border-b-2 border-gray-500 w-1/3 mr-[150px]"
            value={age}
            onChangeText={setAge}
          />
        </View>

        <View className="flex flex-row items-center justify-between my-3"> 
          <Text className="font-md font-bold">
            Berat:
          </Text>
          <TextInput
           keyboardType='numeric'
            className="border-b-2 border-gray-500 w-1/3 mr-[50px]"
            onChangeText={setWeight}
            value={weight}
          />
          <Text className="bg-gray-700 text-white px-5 text-sm py-1 rounded-full">Kg</Text>
        </View>

        <View className="flex  flex-row items-center justify-between my-3"> 
          <Text className="font-md font-bold">
            Tinggi:
          </Text>
          
          <TextInput
            keyboardType='numeric'
            className="border-b-2 border-gray-500 w-1/3 mr-[50px]"
            value={height}
            onChangeText={setHeight}
          />
          <Text className="bg-gray-700 text-white px-5 text-sm py-1 rounded-full">cm</Text>
        </View>

        <View className="my-5">
          <Button 
            color={WARNA_SECONDARY}
            title="Hitung"
            onPress={calculateBMI}
          />
        </View>
      </View>

    </View>
  );
};



export default Home;

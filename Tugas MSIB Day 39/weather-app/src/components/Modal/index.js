import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Modal from "react-native-modal";
import { Button } from 'react-native';

const ResultModal = ({isVisible, toggleModal, bmiResult}) => {

  const getBmiExplanation = (bmi) => {
    if (bmi < 18.5) {
      return "BMI Kamu dibawah batas normal. Kamu sepertinya kekurangan berat badan.";
    } else if (bmi >= 18.5 && bmi < 25) {
      return "BMI Kamu dalam batas normal. Selamat!";
    } else if (bmi >= 25 && bmi < 30) {
      return "BMI Kamu diatas batas normal. Kamu sepertinya kelebihan berat badan.";
    } else {
      return "BMI Kamu jauh diatas batas normal. Kamu sepertinya terkena obesitas.";
    }
  };

  const bmiExplanation = getBmiExplanation(bmiResult);

  return (
    <View className="flex-1">
       <Modal isVisible={isVisible}>
      <View className="flex items-center justify-center">
        <Text className="font-bold text-gray-200 text-md mb-5">BMI Kamu:</Text>
        <Text className="font-bold text-white text-5xl my-3">{bmiResult}</Text>
        <Text className="font-bold text-white text-md my-3 text-center">{bmiExplanation}</Text>
        <Button title="Kembali" onPress={toggleModal} />
      </View>
    </Modal>
    </View>
  )
}

export default ResultModal

const styles = StyleSheet.create({})
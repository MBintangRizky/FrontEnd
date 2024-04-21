import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { WARNA_TERNARY } from '../../utils/constant'

const About = () => {
  return (
    <View className="flex justify-center items-center my-5">
        <Image source= {{uri:'https://avatars.githubusercontent.com/u/147566794?v=4'}} width={150} height={150} borderRadius={50}/>

        <Text className="text-lg text-justify px-5 mt-2" style={{color:WARNA_TERNARY}}>
        Sebagai seorang Frontend Developer, saya adalah seorang kreatif yang bersemangat dengan pandangan yang tajam terhadap estetika dan detail. Dengan kecintaan pada seni dan teknologi, saya memadukan keahlian desain visual dengan pemahaman yang mendalam tentang komunikasi visual. Saya percaya bahwa desain bukan hanya tentang menciptakan sesuatu yang indah, tetapi juga tentang menceritakan cerita, mempengaruhi emosi, dan membangun pengalaman yang berarti bagi pengguna. Dengan setiap proyek yang saya kerjakan, saya berusaha untuk memberikan solusi kreatif yang inovatif dan memenuhi kebutuhan klien dengan hasil yang memikat dan efektif.
        </Text>

    </View>
  )
}

export default About

const styles = StyleSheet.create({})
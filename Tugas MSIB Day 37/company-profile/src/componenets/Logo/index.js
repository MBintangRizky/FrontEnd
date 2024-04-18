import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { logo } from '../../assets'
import { primaryColor, secondaryColor } from '../../utils/constant'

const Logo = () => {
  return (
    <View className="flex flex-row items-center">
        <Image
        source={logo}
        style={{ width: 150, height: 150 }}
        />
        <View className="flex flex-col">
          <Text className="text-3xl" style={{color:primaryColor}}>
            Medico
          </Text>
          <Text className="text-2xl" style={{color:secondaryColor}}>
            Health Solutions
          </Text>
        </View>
      </View>
  )
}

export default Logo

const styles = StyleSheet.create({})
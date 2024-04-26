import { StyleSheet, Text, View, Pressable } from 'react-native'
import React, {useState} from 'react'
import { WARNA_SECONDARY, WARNA_TERNARY } from '../../utils/constant';

const RadioGender = ({data, onSelect}) => {

  const [userOption, setUserOption] = useState(null);
  const selectHandler = (value) => {
    onSelect(value);
    setUserOption(value);
  };

  return (
    <View className='flex flex-row items-center justify-center gap-2 w-full'>
      {data.map((item) => {
        return (
          <Pressable
            className="rounded-full w-1/2 p-2"
            style={[
                { backgroundColor: item.value === userOption ? WARNA_SECONDARY : WARNA_TERNARY }
            ]}
            onPress={() => selectHandler(item.value)}
            key={item.value}
        >
            <Text style={styles.option} className="text-white text-center">{item.value}</Text>
        </Pressable>

        );
      })}
    </View>
  )
}

export default RadioGender

const styles = StyleSheet.create({})
import { Pressable, Text, View } from 'react-native';
import React, { useState, useEffect } from 'react';

const PriorityButton = ({ data, onSelect, selectedOrder }) => {
  const [userOption, setUserOption] = useState(null);

  useEffect(() => {

    const selectedOption = data.find(item => item.order === selectedOrder);
    if (selectedOption) {
      setUserOption(selectedOption.value);
    }
  }, [selectedOrder, data]);

  const selectHandler = (value) => {
    onSelect(value);
    setUserOption(value);
  };

  return (
    <View className="flex flex-row items-center justify-evenly gap-x-5">
      {data.map((item, index) => {
        let bgColor;
        switch (item.order) {
          case 1:
            bgColor = '#FF76CE';
            break;
          case 2:
            bgColor = '#FDFFC2';
            break;
          case 3:
            bgColor = '#94FFD8';
            break;
          default:
            bgColor = 'white';
        }
        return (
          <Pressable
            key={index}
            style={{
              backgroundColor: item.value === userOption ? bgColor : 'white',
            }}
            className={`px-4 py-2 rounded-md`}
            onPress={() => selectHandler(item.value)}
          >
            <Text style={{ fontSize: 20, color: 'black', textAlign: 'center' }}>
              {item.value}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
};

export default PriorityButton;

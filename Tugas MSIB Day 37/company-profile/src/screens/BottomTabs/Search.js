import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { primaryColor, thirdColor } from '../../utils/constant';

const DATA = [
  {
    id: '1',
    name: 'Dr. John Doe',
    specialization: 'Cardiologist',
    rating: '4.5',
    photo: 'https://randomuser.me/api/portraits/men/1.jpg',
  },
  {
    id: '2',
    name: 'Dr. Jane Smith',
    specialization: 'Dermatologist',
    rating: '4.8',
    photo: 'https://randomuser.me/api/portraits/women/1.jpg',
  },
  {
    id: '3',
    name: 'Dr. David Johnson',
    specialization: 'Orthopedic Surgeon',
    rating: '4.2',
    photo: 'https://randomuser.me/api/portraits/men/2.jpg',
  },
  {
    id: '4',
    name: 'Dr. Emily Brown',
    specialization: 'Pediatrician',
    rating: '4.6',
    photo: 'https://randomuser.me/api/portraits/women/2.jpg',
  },
  {
    id: '5',
    name: 'Dr. Michael Wilson',
    specialization: 'Neurologist',
    rating: '4.9',
    photo: 'https://randomuser.me/api/portraits/men/3.jpg',
  },
  {
    id: '6',
    name: 'Dr. Olivia Garcia',
    specialization: 'Oncologist',
    rating: '4.7',
    photo: 'https://randomuser.me/api/portraits/women/3.jpg',
  },
  {
    id: '7',
    name: 'Dr. Ethan Martinez',
    specialization: 'Gynecologist',
    rating: '4.3',
    photo: 'https://randomuser.me/api/portraits/men/4.jpg',
  },
  {
    id: '8',
    name: 'Dr. Sophia Anderson',
    specialization: 'Psychiatrist',
    rating: '4.4',
    photo: 'https://randomuser.me/api/portraits/women/4.jpg',
  },
  {
    id: '9',
    name: 'Dr. William Taylor',
    specialization: 'Urologist',
    rating: '4.1',
    photo: 'https://randomuser.me/api/portraits/men/5.jpg',
  },
  {
    id: '10',
    name: 'Dr. Isabella Brown',
    specialization: 'Ophthalmologist',
    rating: '4.8',
    photo: 'https://randomuser.me/api/portraits/women/5.jpg',
  },
];

const Item = ({ doctor }) => (
  <View style={styles.item} className="rounded-md">
    <Image source={{ uri: doctor.photo }} style={styles.photo} />
    <View style={styles.details}>
      <Text style={styles.name}>{doctor.name}</Text>
      <Text style={styles.specialization}>{doctor.specialization}</Text>
      <View className="flex flex-row items-center justify-start">
        <MaterialCommunityIcons
            name="star"
            color={'yellow'}
            size={16}
          />

        <Text style={styles.rating} className="text-white ml-2">{doctor.rating}</Text>
        

      </View>
    </View>
    <TouchableOpacity style={styles.button}>
      <Text style={styles.buttonText}>Chat Now</Text>
    </TouchableOpacity>
  </View>
);

const Search = () => {
  const [searchText, setSearchText] = useState('');

  const filteredData = DATA.filter((doctor) =>
    doctor.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchContainer}>
        <View style={styles.searchInputContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Cari Dokter"
            onChangeText={(text) => setSearchText(text)}
            value={searchText}
          />
          <MaterialCommunityIcons
            name="magnify"
            color={'gray'}
            size={16}
            style={styles.searchIcon}
          />
        </View>
        <TouchableOpacity style={styles.filterButton}>
          <MaterialCommunityIcons
            name="filter-variant"
            color={'white'}
            size={16}
          />
        </TouchableOpacity>
      </View>
      <FlatList
        data={filteredData}
        renderItem={({ item }) => <Item doctor={item} />}
        keyExtractor={(item) => item.id}
        keyboardShouldPersistTaps="handled"
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight + 10 || 0,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  searchInputContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
  },
  searchInput: {
    flex: 1,
    height: 40,
    paddingHorizontal: 10,
  },
  searchIcon: {
    marginHorizontal: 5,
  },
  filterButton: {
    marginLeft: 10,
    backgroundColor: '#007bff',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 5,
  },
  filterButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  item: {
    backgroundColor: primaryColor,
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  photo: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  details: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: "white"
  },
  specialization: {
    fontSize: 16,
    color: 'white',
  },
  rating: {
    fontSize: 14,
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default Search;

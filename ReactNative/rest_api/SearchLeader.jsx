import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, Image, Alert } from 'react-native';
import { useNavigation } from "@react-navigation/native";

import AppHeader from './Header';
import Footes from './Footes';
const backIcon = require("./assets/backIcon.png");

const SearchLeader = () => {
  const navigation = useNavigation();

  const handleBackButtonPress = () => {
    navigation.goBack();
  };

  const [title, setTitle] = useState('');
  const [foundLeader, setFoundLeader] = useState(null);

  const handleSearchLeader = async () => {
    try {
      const response = await fetch(`http://192.168.90.26:8084/courses/${title}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        alert("No leader found with the given title.");
        // throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();

      if (data) {
        // console.log('Leader Found:', data);
        setFoundLeader(data);
      } else {
        // console.log('No leader found with the given title.');
        // alert("No leader found with the given title.");
        setFoundLeader(null);
      }
    } catch (error) {
      // console.error('Error searching for leader:', error.message);
      alert("Error occur while searching for leader");
    }
  };

  return (
    <View style={styles.container}>
      <AppHeader style={styles.head}/>
      <View style={styles.inContainer}>
      <Text style={styles.h1}>Great Legends - Guardians of Our Legacy</Text>


      <TextInput
        style={styles.input}
        value={title}
        placeholder='Enter Name of the Great Leader'
        onChangeText={text => setTitle(text)}
      />

      <TouchableOpacity style={styles.button} onPress={handleSearchLeader}>
          <Text style={styles.buttonText}>Search Leader</Text>
        </TouchableOpacity>

      {foundLeader && (
        <View>
          <Text>Leader Name: {foundLeader.title}</Text>
          <Text>Leader Description: {foundLeader.description}</Text>
        </View>
      )}
      </View>
      <Footes/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
  },
  input: {
    height: 60,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
  },
  backButtonArea: {
    position: 'absolute',
    top: 16,
    left: 16,
  },
  backIcon: {
    width: 24,
    height: 24,
  },
  head: {
    position: 'absolute',
    top: 0,
    width: '100%',
    marginBottom: 10,
    marginTop: 10,
    borderRadius: 10,
  }, 
  inContainer:{
    flex: 1,
    padding: 16,
    marginTop: 200,
  },
  h1: {
    textAlign: 'center',
    color: 'white',
    paddingTop: 15,
    paddingRight: 15,
    paddingBottom: 15,
    paddingLeft: 15,
    backgroundColor: 'black',
    borderRadius: 20,
    fontSize: 15,
    marginBottom: 18,
  },
  button: {
    backgroundColor: '#3498db',
    borderRadius: 10,
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    padding: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default SearchLeader;

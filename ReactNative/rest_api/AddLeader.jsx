import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { useNavigation } from "@react-navigation/native";

import AppHeader from './Header';
import Footes from './Footes';

const AddLeader = () => {
  const navigation = useNavigation();

  const handleBackButtonPress = () => {
    navigation.goBack();
  };

  const handleAddLeader = async () => {
    try {
      const response = await fetch('http://192.168.90.26:8084/courses', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: title,
          description: description,
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      // Assuming the server responds with the newly created leader/course data
      const data = await response.json();
      console.log('Added Leader:', data);
      Alert.alert('Success', 'Leader Added Successfully');
      setTitle('');
      setDescription('');
    } catch (error) {
      console.error('Error adding leader:', error.message);
      Alert.alert('Error', 'Failed to add leader. Please try again.');
    }
  };

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  return (
    <View style={styles.container}>
      <AppHeader style={styles.head} />

      <View style={styles.inContainer}>

        <Text style={styles.h1}>Great Legends - Guardians of Our Legacy</Text>

        <TextInput
          style={styles.input}
          value={title}
          placeholder='Enter Name of the Great Leader'
          onChangeText={text => setTitle(text)}
        />

        <TextInput
          style={styles.input2}
          value={description}
          placeholder='Write Their Story'
          onChangeText={text => setDescription(text)}
          multiline
        />

        <TouchableOpacity style={styles.button} onPress={handleAddLeader}>
          <Text style={styles.buttonText}>Add Leader</Text>
        </TouchableOpacity>

      </View>
      <Footes />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  inContainer: {
    flex: 1,
    padding: 16,
    marginTop: 200,
  },
  input2: {
    height: 130,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 18,
    paddingHorizontal: 8,
    textAlignVertical: 'top',
    paddingTop: 10,
  },
  input: {
    height: 60,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 18,
    paddingHorizontal: 8,
  },
  head: {
    position: 'absolute',
    top: 0,
    width: '100%',
    marginBottom: 10,
    marginTop: 10,
    borderRadius: 10,
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

export default AddLeader;

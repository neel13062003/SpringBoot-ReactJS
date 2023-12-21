import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, Image, Alert } from 'react-native';
import { useNavigation } from "@react-navigation/native";

import AppHeader from './Header';
import Footes from './Footes';
const backIcon = require("./assets/backIcon.png");

const UpdateLeader = () => {
  const navigation = useNavigation();

  const handleBackButtonPress = () => {
    navigation.goBack();
  };

  const handleUpdateLeader = async () => {
    try {
      const response = await fetch('http://192.168.90.26:8084/courses/' + title, {
        method: 'PUT',  // Assuming your server supports updating via PUT method
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: title,
          description: description,
        }),
      });

      if (!response.ok) {
        const errorMessage = await response.text();
        // console.error(`HTTP error! Status: ${response.status}, Message: ${errorMessage}`);
        // alert("Error Updating leader");
        return;
      }else{
        alert("Leader Updated Successfully");
        setTitle('');
        setDescription('');
      }
      const data = await response.json();

      if (data.updated) {
        // console.log('Leader Updated:', data);
        alert("Leader Updated Successfully");
        setTitle('');
        setDescription('');
      } else {
        // console.log('No leader found with the given title.');
        // alert("No leader found with the given title.");
      }
    } catch (error) {
      // alert("Error updating leader");
      // console.error('Error updating leader:', error.message);
    }
  };

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  return (
    <View style={styles.container}>
      <AppHeader style={styles.head}/>
      <View style={styles.inContainer}>

        <Text style={styles.h1}>Great Legends - Guardians of Our Legacy</Text>

        <TextInput
          style={styles.input}
          value={title}
          onChangeText={text => setTitle(text)}
          placeholder='Enter Name of the Great Leader'
        />

        <TextInput
          style={styles.input2}
          value={description}
          onChangeText={text => setDescription(text)}
          placeholder='Write Their Story'
          multiline
        />
        <TouchableOpacity style={styles.button} onPress={handleUpdateLeader}>
          <Text style={styles.buttonText}>update Leader</Text>
        </TouchableOpacity>
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
  input2: {
    height: 130,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 18,
    paddingHorizontal: 8,
    textAlignVertical: 'top',
    paddingTop: 10,
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
  }, inContainer:{
    flex: 1,
    padding: 16,
    marginTop: 200,
  },h1: {
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
  },button: {
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

export default UpdateLeader;

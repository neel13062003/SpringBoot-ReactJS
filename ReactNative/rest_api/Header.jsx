import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const Header = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity 
        onPress={() => navigation.navigate('Home')}
      >
        <Text style={styles.link}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        onPress={() => navigation.navigate('AddLeader')}
      >
        <Text style={styles.link}>Add</Text>
      </TouchableOpacity>
      <TouchableOpacity 
          onPress={() => navigation.navigate('LeaderScreen')}
      >
        <Text style={styles.link}>See</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        onPress={() => navigation.navigate('UpdateLeader')}
      >
        <Text style={styles.link}>Update</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        onPress={() => navigation.navigate('SearchLeader')}
      >
        <Text style={styles.link}>Search</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        onPress={() => navigation.navigate('DeleteLeader')}
      >
        <Text style={styles.link}>Delete</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
    headerContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      height: 50,  
      backgroundColor: '#ff9916',
      position: 'absolute',
      top: 50,
      left: 0,
      right: 0,
      zIndex: 0, // This ensures the header is above other elements
      height: 70,
    },
    link: {
        color: 'black',
        fontWeight: 'bold',
    },
  });

export default Header;

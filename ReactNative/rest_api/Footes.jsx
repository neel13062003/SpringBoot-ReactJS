import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

const Footes = () => {
  return (
    <View style={styles.footer}>
        <Text style={styles.text2}>&copy; 2023 Your App. All rights reserved.</Text>
    </View>
  )
}

export default Footes

const styles = StyleSheet.create({
footer: {
    backgroundColor: '#ff9916',
    color: '#fffdfd',
    padding: 10,
    textAlign: 'center',
    position: 'absolute',
    bottom: 0,
    width: '110%',
    marginLeft:0,
    marginRight:0,
  },
  text2: {
    color: 'black',
    textAlign: 'center',
  },
});
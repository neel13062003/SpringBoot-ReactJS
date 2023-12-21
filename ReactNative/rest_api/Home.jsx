import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

const shivaji = require("./assets/1.webp");
import AppHeader from './Header'
import Footes from './Footes';

const Home = () => {
  return (
    <View style={styles.container}>
      <AppHeader style={styles.head}/>
      <Text style={styles.text1}>છત્રપતિ શિવાજી</Text>
      <TouchableOpacity style={styles.abc} activeOpacity={0.9}>
        <Image
          source={shivaji}
          style={styles.img}
          resizeMode="contain"
        />
      </TouchableOpacity>
      <Footes/>
    </View>
  );
};

Home.navigationOptions = {
  headerShown: false,
};
export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text1: {
    fontSize: 25,
    color: 'white',
    backgroundColor: 'black',
    borderRadius: 10,
    padding: 5,
    width: 300,
    textAlign: 'center',
  },
  img: {
    marginTop: 10,
    width: 300,
    height: 300,
  },
  head: {
    position: 'absolute',
    top: 0,
    width: '100%',
    marginBottom: 10,
    marginTop: 10,
    borderRadius: 10,
  },
});
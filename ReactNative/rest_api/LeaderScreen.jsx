// Import necessary components and modules
import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

import AppHeader from './Header';
import Footes from './Footes';

// Component for LeaderScreen
const LeaderScreen = () => {
  const [courses, setCourses] = useState(null);

  useEffect(() => {
    fetch('http://192.168.90.26:8084/courses')
      .then(response => response.json())
      .then(data => setCourses(data))
      .catch(error => console.error(error));
  }, []);

  if (!courses) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <AppHeader style={styles.head} />
      {/* Corrected the typo from Scrollview to ScrollView */}
      <ScrollView>
        <View style={styles.inContainer}>
          <Text style={styles.h1}>Great Legends - Guardians of Our Legacy</Text>
          {courses.map(course => (
            <View key={course.id}>
              <Text style={styles.Leader}>{course.title}</Text>
              <Text>{course.description}</Text>
              <View style={styles.separator} />
            </View>
          ))}
        </View>
      </ScrollView>
      <Footes />
    </View>
  );
};

// Styles for the component
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  separator: {
    height: 1,
    backgroundColor: '#ccc',
    marginVertical: 8,
  },
  head: {
    position: 'absolute',
    top: 0,
    width: '100%',
    marginBottom: 10,
    marginTop: 10,
    borderRadius: 10,
  },
  inContainer: {
    flex: 1,
    padding: 16,
    marginTop: 150,
    marginBottom: 100,
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
    top: -10,
  },
  Leader: {
    fontSize: 15,
    fontWeight: 'bold',
    backgroundColor: '#3498db',
    padding:10,
    borderRadius: 10,
  },
});

// Export the LeaderScreen component
export default LeaderScreen;

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Home';


import LeaderScreen from './LeaderScreen';
import AddLeader from './AddLeader';
import DeleteLeader from './DeleteLeader';
import UpdateLeader from './UpdateLeader';
import SearchLeader from './SearchLeader';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="LeaderScreen" component={LeaderScreen} />
        <Stack.Screen name="AddLeader" component={AddLeader} />
        <Stack.Screen name="DeleteLeader" component={DeleteLeader} />
        <Stack.Screen name="UpdateLeader" component={UpdateLeader} />
        <Stack.Screen name="SearchLeader" component={SearchLeader} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Courses from './Src/Courses';
import CourseDetails from './Src/CourseDetails';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerBackTitleVisible: false,
          headerTintColor: '#ffffff',
          headerStyle: {
            backgroundColor: '#09dca4',
          },
        }}>
        <Stack.Screen
          name="All Courses"
          component={Courses}
        />
        <Stack.Screen
          name="Details"
          component={CourseDetails}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

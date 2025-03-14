import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import GalleryScreen from './GalleryScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Про художника' }} />
        <Stack.Screen name="Gallery" component={GalleryScreen} options={{ title: 'Галерея' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


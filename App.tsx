import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen'; // Importa HomeScreen
import WelcomeScreen from './screens/WelcomeScreen'; // Importa WelcomeScreen
import CCNAScreen from './screens/CCNAScreen'; // Importa CCNAScreen
import LessonScreen from './screens/LessonScreen'; // Importa LessonScreen si lo estás usando

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="CCNA" component={CCNAScreen} />
        <Stack.Screen name="LessonScreen" component={LessonScreen} options={{ title: 'Modulo 1' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

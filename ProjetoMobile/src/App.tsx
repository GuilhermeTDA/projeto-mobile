import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { NativeStackScreenProps, createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text, View } from 'react-native';
import Principal from './layouts/Principal';
import HomeNavigator from './navigation/home.navigator';
import Ex3 from './screens/ex3';








const App = () => {
  return (
  // <Ex3/>
    <NavigationContainer>
      <HomeNavigator />
    </NavigationContainer>
  );
}


export default App;



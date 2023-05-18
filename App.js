import React, { useState } from 'react';
import {StyleSheet, View } from 'react-native';
import { useFonts } from 'expo-font';
import SearchElement from './src/screens/SearchElement';
import ListElements from './src/screens/ListElements';


export default function App() {

  const [loaded] = useFonts ({
    Shoulder: require('./assets/fonts/BigShouldersStencilText-ExtraBold.ttf'),
    ShoulderM: require('./assets/fonts/BigShouldersStencilText-Medium.ttf')
  });
  

return(
<View style={styles.container}>
  <SearchElement />


</View>

);
}


const styles = StyleSheet.create ({
  container: {
    flex: 2,
    backgroundColor: '#FBE204',
  },
});
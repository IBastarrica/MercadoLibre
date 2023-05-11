import React, { useState } from 'react';
import {Text, StyleSheet, TextInput, View, FlatList, Image, TouchableOpacity } from 'react-native';
import { useFonts } from 'expo-font';
import colors from "./src/constants/color"
import SearchElement from './src/screens/SearchElement';
import ListElements from './src/screens/ListElement';


export default function App() {

  const [loaded] = useFonts ({
    Shoulder: require('./assets/fonts/BigShouldersStencilText-ExtraBold.ttf'),
    ShoulderM: require('./assets/fonts/BigShouldersStencilText-Medium.ttf')
  });
  

return(
<View style={styles.container}>
  <SearchElement />
  <ListElements />
</View>

);
}


const styles = StyleSheet.create ({
  container: {
    flex: 1,
    backgroundColor: '#FBE204',
  },
});
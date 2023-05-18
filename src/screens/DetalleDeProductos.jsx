import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


export default function DetalleDeProductos ({navigation}) {
  return (
    <View style={styles.container}>
      <Text>detalle</Text>
    </View>
  );
}



const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: 'yellow',
        justifyContent: 'center',
        alignItems: 'center',
    },
});

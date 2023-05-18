import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Inicio from '../src/screens/Inicio';
import DetalleDeProductos from '../src/screens/DetalleDeProductos';
import ListElements from '../src/screens/ListElements';
import SearchElement from '../src/screens/SearchElement';



const Stack = createNativeStackNavigator();

const ShopNavigator = () => (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='Inicio'>
            <Stack.Screen name="Inicio" component={SearchElement}/>               
            <Stack.Screen name="Products" component={ListElements}/>
            <Stack.Screen name="Detail" component={DetalleDeProductos}/>
        </Stack.Navigator>
    </NavigationContainer>
);

export default ShopNavigator;
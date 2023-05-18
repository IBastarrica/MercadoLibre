import { View, TextInput, Image, TouchableOpacity, Button } from 'react-native';
import React, { useState } from 'react';
import styles from './style';


export default function SearchElement ({navigation})  {
    const [textItem, setTextItem] = useState("");
    const [list, setList] = useState([]);

    const onHandleChangeText = text => {
    setTextItem(text);
    };
    const addItem = () => {
        setList(estadoAnterior => [...estadoAnterior, {name: textItem, id: Math.random().toString()},]);
        setTextItem("");
    };
    
return (
    <View style={styles.inputContainer}> 
    <View style={styles.addItemContainer}>
    <Image source={require('../../../assets/magnifyingglass.png')} style={styles.searchIcon} />
    <TextInput 
    placeholder="  Buscar en Mercado Libre" 
    style={styles.input} 
    onChangeText={onHandleChangeText} 
    value={textItem} 
    /> 
    <Image source={require('../../../assets/glass.png')} style={styles.searchIcon} />
    <TouchableOpacity onPress={addItem} >
        <Image 
        source={require('../../../assets/cart.png')} 
        style={styles.cart} 
        />
    </TouchableOpacity>
    <View style={styles.containerButton}>
    <Button title="Ir a Productos" onPress={() => {navigation.navigate('Products')
    }} />
    </View>
    </View>
    </View>
    
)
}


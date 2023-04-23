import React, { useState } from 'react';
import {Text, StyleSheet, TextInput, View, FlatList, Image, TouchableOpacity } from 'react-native';

export default function App() {

  const [textItem, setTextItem] = useState("");
  const [list, setList] = useState([]);

  const onHandleChangeText = text => {
    setTextItem(text);

  };

  const addItem = () => {
    setList(estadoAnterior => [...estadoAnterior, {name: textItem, id: Math.random().toString()},]);
    setTextItem("");
  };

  const removeItem = (itemId) => {
    setList(estadoAnterior => estadoAnterior.filter(item => item.id !== itemId));
  };
  
  const renderItem = ({item}) => (
    <View style={styles.renderItemStyle}>
      <Text>
        {item.name}
      </Text>
      <TouchableOpacity onPress={() => removeItem(item.id)}>
        <Image source={require('./assets/trash.png')} style={styles.trash}/>
      </TouchableOpacity>
    </View>
  );


return(
<View style={styles.container}>
  <View style={styles.inputContainer}>
    <View style={styles.addItemContainer}>
    <Image source={require('./assets/magnifyingglass.png')} style={styles.searchIcon} />
      <TextInput 
      placeholder="  Buscar en Mercado Libre" 
      style={styles.input} 
      onChangeText={onHandleChangeText} 
      value={textItem} 
      /> 
      <Image source={require('./assets/glass.png')} style={styles.searchIcon} />
      <TouchableOpacity onPress={addItem}>
        <Image 
        source={require('./assets/cart.png')} 
        style={styles.cart} 
        />
      </TouchableOpacity>
    </View>
  </View>
  <View style={styles.listContainer}>
    <FlatList
    data={list}
    renderItem={renderItem}
    keyExtractor={item => item.id}
    />
  </View>
</View>

);
}


const styles = StyleSheet.create ({
  container: {
    flex: 1,
    backgroundColor: '#FBE204',
  },
  inputContainer: {
    height: 200,
    paddingHorizontal: 30,
    paddingTop: 80,
  },
  addItemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  input: {
    paddingLeft: 30, // Agrega un padding a la izquierda para dejar espacio para la imagen
    width: 320,
    height: 32,
    backgroundColor: "white",
    borderRadius: 10,
    shadowOpacity: 0.1,
  },
  listContainer: {
    flex: 2,
    marginHorizontal: 30,
    marginTop: 20,
    padding: 3,
  },
  renderItemStyle: {
    height: 60,
    flexDirection: 'row',
    marginBottom: 25,
    backgroundColor: "white",
    borderRadius: 10,
    padding: 10,
    justifyContent: "space-around",
    shadowColor: 'center',
    shadowOpacity: 0.3,
    textShadowOffset : {width:0, height: 1},
    shadowRadius: 2,
    elevation: 3,
  },
  cart: {
    width: 25,
    height: 25,
  },
  trash: {
    width: 30,
    height: 30,
    justifyContent: 'flex-end',
  },
  searchIcon: {
    position: 'absolute',
    width: 20,
    height: 20,
    padding: 1,
    margin: 5,
  },
})

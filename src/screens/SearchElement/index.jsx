import { View, TextInput, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const SearchElement = () => {
    const [textItem, setTextItem] = useState("");
    const [list, setList] = useState([]);

    const onHandleChangeText = text => {
    setTextItem(text);
    };
return (
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
)
}

export default SearchElement;
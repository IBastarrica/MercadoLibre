import { View, Text } from 'react-native'
import React from 'react'

const ListElements = () => {
    const removeItem = (itemId) => {
        setList(estadoAnterior => estadoAnterior.filter(item => item.id !== itemId));
    };

    const addItem = () => {
        setList(estadoAnterior => [...estadoAnterior, {name: textItem, id: Math.random().toString()},]);
        setTextItem("");
    };
    
    const renderItem = ({item}) => (
    <View style={styles.renderItemStyle}>
        <Text style={styles.fontName}>
            {item.name}
        </Text>
        <TouchableOpacity onPress={() => removeItem(item.id)}>
            <Image source={require('./assets/trash.png')} style={styles.trash}/>
        </TouchableOpacity>
    </View>
    );

return (
    <View style={styles.listContainer}>
        <FlatList
        data={list}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        />
    </View>
)
}

export default ListElements;
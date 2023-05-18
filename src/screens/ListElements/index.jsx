import { View, Button } from 'react-native';
import React from 'react';
import style from './style';

export default function ListElements ({navigation}){ 
return (
    <View style={style.container}>
        <Button title="Ir a Detalle" onPress={() => {navigation.navigate('Detail')}} />
    </View>

)
};


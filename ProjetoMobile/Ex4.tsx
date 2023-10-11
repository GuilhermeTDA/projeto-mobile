import React from 'react';
import {
    StyleSheet,
    Text,
    TextInput,
    View
} from 'react-native';

import ListaFlat from './ListaFlat';


type Ex4Props = {
    lista: {key: number; descricao: String }[];
}



const Ex4 = (props: Ex4Props) => {
    return <>
        <View style={styles.container}>
            
            <ListaFlat array={props.lista} />
        </View>
    </>
}

export default Ex4;

const styles = StyleSheet.create({
    container: {
        fontSize: 50,
        backgroundColor: 'white',
        borderWidth: 3,
        borderColor: 'gray',
    }

    
});
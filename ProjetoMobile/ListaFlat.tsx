import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Image,
    ScrollView,
    FlatList,
} from 'react-native';

type ListaFlatProps = {
    array: { key: number; descricao: String }[]

}

const ListaFlat = (props: ListaFlatProps) => {
    return <FlatList
        data={props.array}
        renderItem={({ item }) => (
            <>
                <Text >{item.descricao}</Text>
                <TextInput />
            </>
        )}
    />
}

export default ListaFlat;

const styles = StyleSheet.create({

})


''
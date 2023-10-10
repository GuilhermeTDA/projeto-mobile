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
    array: {key: number; descricao: String }[]

}

const ListaFlat = (props: ListaFlatProps) => {
    return <FlatList
        data={props.array}
        renderItem={({ item }) => (
            <Text style={styles.item}>{item.descricao}</Text>)}
    />
}

export default ListaFlat;

const styles = StyleSheet.create({
    item
})



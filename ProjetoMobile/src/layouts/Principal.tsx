import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  ScrollView,
  Button,
  Pressable,
} from 'react-native';
import { HomeProps } from '../types';
import ExemploStylesText from './ExemploStylesText';
import ExemploStylesView from './ExemploStyleView';
import TelaLogin from '../screens/TelaLogin';
import Ex4 from './Ex4';
import ListaSection from './ListaSection';
import ListaFlat from './ListaFlat';

const Principal = ({ navigation, route }: HomeProps) => {


  const lista = [
    { key: 1, descricao: 'Joao' },
    { key: 2, descricao: 'jorge' },
    { key: 3, descricao: 'kleber' },
    { key: 4, descricao: 'robson' },
  ];

  // const listaSection = [
  //   { title: 'A', data: [{ key: 1, descricao: 'Ana' }] },
  //   { title: 'B', data: [{ key: 2, descricao: 'Bruno' }] },
  //   { title: 'C', data: [{ key: 3, descricao: 'Carlos' }] },
  //   { title: 'D', data: [{ key: 4, descricao: 'Douglas' }] },
  //   { title: 'E', data: [{ key: 5, descricao: 'Elio' }] },
  //   { title: 'F', data: [{ key: 6, descricao: 'Fábio' }] },
  // ];

  return (
    <View style={styles.container}>

      <Button title="Go to Details" onPress={() => navigation.navigate('Detalhes')} />

      {/* { <ExemploStylesText />
        <ExemploStylesView  /> } */}
      {/* <ListaFlat array={lista} />
        <ListaSection array={listaSection} /> */}
      <Pressable style={styles.notas} onPress={() => navigation.navigate('Notas')}>

        <Text style={{ fontSize: 15 }}>Criar nota</Text>
      </Pressable>
{/* 
      <Ex4 lista={lista} /> */}



    </View>
  );
}

export default Principal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#E0FFFF',
    margin: 10,
},
  caixaTexto: {
    backgroundColor: 'white',
    borderWidth: 3,
    borderColor: 'orange'

  },
  ex2: {
    backgroundColor: 'green',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  imagem: {
    width: 200,
    height: 200
  },
  notas: {
    width: 60,
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    backgroundColor: '#d4d0cf',
    //marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },

});
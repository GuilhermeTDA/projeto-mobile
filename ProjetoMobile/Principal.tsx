import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  ScrollView,
  Button,
} from 'react-native';
import ListaFlat from './ListaFlat';
import ListaSection from './ListaSection';
import Ex4 from './Ex4';
import { HomeProps } from './src/types';

const Principal = ({ navigation, route }: HomeProps) => {


  // const lista = [
  //   { key: 1, descricao: 'Joao' },
  //   { key: 2, descricao: 'jorge' },
  //   { key: 3, descricao: 'kleber' },
  //   { key: 4, descricao: 'robson' },
  // ];

  // const listaSection = [
  //   { title: 'A', data: [{ key: 1, descricao: 'Ana' }] },
  //   { title: 'B', data: [{ key: 2, descricao: 'Bruno' }] },
  //   { title: 'C', data: [{ key: 3, descricao: 'Carlos' }] },
  //   { title: 'D', data: [{ key: 4, descricao: 'Douglas' }] },
  //   { title: 'E', data: [{ key: 5, descricao: 'Elio' }] },
  //   { title: 'F', data: [{ key: 6, descricao: 'Fábio' }] },
  // ];

  return (<>
    <View>
      <>
        <Button title="Go to Details" onPress={() => navigation.navigate('Detalhes')} />
        {/* <ListaFlat array={lista} /> */}
        {/* <ListaSection array={listaSection} /> */}
        {/* <Ex4 lista={lista} /> */}
      </>


    </View>


  </>
  );
}

export default Principal;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'yellow',
    borderWidth: 3,
    borderColor: 'red'
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
  }

});
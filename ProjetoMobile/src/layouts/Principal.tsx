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

  return (
    <View style={styles.container}>

      <Button title="Go to Details" onPress={() => navigation.navigate('Detalhes')} />


      <Pressable style={styles.botao} onPress={() => navigation.navigate('CadCliente')}>

        <Text style={{ fontSize: 15 }}>Criar Cliente</Text>
      </Pressable>

      <Pressable style={styles.botao} onPress={() => navigation.navigate('ListarClientes', {clientAtend: ()=>{}})}>

        <Text style={{ fontSize: 15 }}>Listar Cliente</Text>
      </Pressable>

      <Pressable style={styles.botao} onPress={() => navigation.navigate('Atendimento')}>

        <Text style={{ fontSize: 15 }}>Atendimento</Text>
      </Pressable>

      <Pressable style={styles.botao} onPress={() => navigation.navigate('ListarAtendimento')}>

        <Text style={{ fontSize: 15 }}>Listar Atendimento</Text>
      </Pressable>




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
  botao: {
    width: 150,
    height: 60,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    backgroundColor: '#d4d0cf',
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
    margin:10,

},
  botoes: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-around',
    flex: 1

  },

});
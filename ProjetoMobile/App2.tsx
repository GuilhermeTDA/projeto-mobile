import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  ScrollView,
} from 'react-native';

const App2 = () => {
  const [minhaString, setText] = useState('');
  return (<>
    <View>
      <Text>{minhaString}</Text>
      <TextInput
        placeholder="Digite algo aqui..."
        style={{ borderWidth: 1, borderColor: 'gray', padding: 10 }}
        onChangeText={newText => setText(newText)}

        defaultValue={minhaString}
      />
      <Text style={{ padding: 10, fontSize: 42 }}>
        {minhaString}
      </Text>
      <Ex1 titulo='string' />
      <Ex2 />

      const lista = [
    {key:  1, descricao: 'teste'},
    {key:  2, descricao: 'teste2'},
    {key:  3, descricao: 'teste3'},
    {key:  4, descricao: 'teste4'},
    {key:  5, descricao: 'teste5'},
];

    return (
        <>
            <ListaFlat array={lista}/>
            <ListaSelection array={listaselection}/>
        </>
    )

    </View>


  </>
  );
}




type Ex1Props = {
  titulo: string;
}

const Ex1 = (props: Ex1Props) => {
  return <>
    <View style={styles.container}>
      <Text>{props.titulo}</Text>
      <TextInput style={styles.caixaTexto} />
    </View>
  </>
}

const Ex2 = () => {
  return <ScrollView>
    <View style={styles.ex2}>
      <Image style={styles.imagem} source={{
        uri: 'https://reactnative.dev/docs/assets/p_cat1.png',
      }} />

      <Image style={styles.imagem} source={{
        uri: 'https://reactnative.dev/docs/assets/p_cat1.png',
      }} />

      <Image style={styles.imagem} source={{
        uri: 'https://reactnative.dev/docs/assets/p_cat1.png',
      }} />

      <Image style={styles.imagem} source={{
        uri: 'https://reactnative.dev/docs/assets/p_cat1.png',
      }} />

      <Image style={styles.imagem} source={{
        uri: 'https://reactnative.dev/docs/assets/p_cat1.png',
      }} />
    </View>
  </ScrollView>
}

export default App2;

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
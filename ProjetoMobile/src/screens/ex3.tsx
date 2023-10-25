import { Text, View, TextInput, StyleSheet, Pressable, Alert } from 'react-native';
import { useState } from 'react';
import { NotasProps } from '../types';
import firestore from "@react-native-firebase/firestore";

const Ex3 = () => {

    const [codigo, setCodigo] = useState('');
    const [nome, setNome] = useState('');
    const [preco, setPreco] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    function cadastrarProduto() {
        setIsLoading(true);

        firestore()
            .collection('produto')
            .add({
                codigo,
                nome,
                preco,
                created_at: firestore.FieldValue.serverTimestamp()
            })
            .then(() => {
                Alert.alert("Produto", "Cadastrado com sucesso")

            })
            .catch((error) => console.log(error))
            .finally(() => setIsLoading(false));
    }

    return (
        <View style={styles.container}>
            <View style={styles.center}>

                <Text>Código de barras</Text>

                <TextInput style={styles.box} onChangeText={(text) => { setCodigo(text) }} />

                <Text>Nome</Text>

                <TextInput style={styles.box} onChangeText={(text) => { setNome(text) }} />

                <Text>Preço</Text>

                <TextInput style={styles.box} onChangeText={(text) => { setPreco(text) }} />

                <Pressable style={styles.botao} onPress={() => cadastrarProduto()}>
                    <Text style={{ fontSize: 20 }}> Cadastrar</Text>
                </Pressable>
            </View>
        </View>
    )
};

export default Ex3;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: '#E0FFFF',
        margin: 10,
    },
    box: {
        width: 300,
        height: 40,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 5,
        paddingLeft: 10,
        backgroundColor: 'white',
        marginBottom: 20,
    },
    botao: {
        width: 110,
        height: 40,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 5,
        backgroundColor: '#d4d0cf',
        marginBottom: 20,
        alignItems: 'center',
        justifyContent: 'center',

    },
    center: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 3
    },
});
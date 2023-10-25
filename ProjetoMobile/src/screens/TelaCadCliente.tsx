import { Text, View, TextInput, StyleSheet, Pressable, Alert, Image } from 'react-native';
import { useState } from 'react';
import { ClienteProps } from '../types';
import firestore from "@react-native-firebase/firestore";

const cadastroCliente = ({ navigation, route }: ClienteProps) => {

    const [nome, setNome] = useState('');
    const [cpf, setCpf] = useState('');
    const [endereco, setEndereco] = useState('');
    const [dataNasc, setDataNasc] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    function cadastrarCliente() {
        setIsLoading(true);

        firestore()
            .collection('Cliente')
            .add({
                nome,
                cpf,
                endereco,
                dataNasc,
                created_at: firestore.FieldValue.serverTimestamp()
            })
            .then(() => {
                Alert.alert("Cliente", "Cliente cadastrado com sucesso")
                navigation.navigate('Home')
            })
            .catch((error) => console.log(error))
            .finally(() => setIsLoading(false));
    }

    return (
        <View style={styles.container}>
            <View style={styles.center}>
                <Image style={styles.imagem}
                    source={require('../assets/sonic.jpg')} />
                <Text>Nome</Text>

                <TextInput style={styles.box} onChangeText={(text) => { setNome(text) }}/>

                <Text>cpf</Text>

                <TextInput style={styles.box} onChangeText={(text) => { setCpf(text) }}/>

                <Text>endereço</Text>

                <TextInput style={styles.box}  onChangeText={(text) => { setEndereco(text) }}/>

                <Text>data de nascimento</Text>

                <TextInput style={styles.box}  onChangeText={(text) => { setDataNasc(text) }}/>

                <Pressable style={styles.botao} onPress={() => cadastrarCliente()}>
                    <Text style={{ fontSize: 20 }}> Cadastrar cliente</Text>
                </Pressable>

                <Pressable style={styles.voltar} onPress={() => navigation.navigate('Login')}>

                    <Text style={{ fontSize: 15 }}>Voltar</Text>
                </Pressable>
            </View>
        </View>
    )
}

export default cadastroCliente;

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
        width: 190,
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
    voltar: {
        width: 60,
        height: 40,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 5,
        backgroundColor: '#d4d0cf',
        //marginBottom: 20,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10
    },
    imagem: {
        width: 250,
        height: 250,

    },
});
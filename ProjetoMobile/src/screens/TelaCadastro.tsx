import { Text, View, TextInput, StyleSheet, Pressable, Alert, Image } from 'react-native';
import auth from "@react-native-firebase/auth";
import { useState } from 'react';
import { CadProps } from '../types';

const cadastro = ({ navigation, route }: CadProps) => {

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    function cadastrar() {
        setIsLoading(true);

        if (email && senha) {
            auth()
                .createUserWithEmailAndPassword(email, senha)
                .then(() => {
                    Alert.alert("Conta",
                        "Cadastrado com sucesso")
                    navigation.navigate('Login')
                })
                .catch((error) => {
                    console.log(error);
                    Alert.alert("Erro",
                        String(error))
                })
                .finally(() => { setIsLoading(false) });
        } else setIsLoading(false);
    }

    return (
        <View style={styles.container}>
            <View style={styles.center}>
                <Image style={styles.imagem}
                    source={require('../assets/sonic.jpg')} />
                <Text>Nome</Text>

                <TextInput style={styles.box} />

                <Text>Email</Text>

                <TextInput style={styles.box} onChangeText={(text) => { setEmail(text) }}/>

                <Text>Senha</Text>

                <TextInput style={styles.box}  onChangeText={(text) => { setSenha(text) }}/>

                <Pressable style={styles.botao} onPress={() => cadastrar()}>
                    <Text style={{ fontSize: 20 }}> Cadastrar</Text>
                </Pressable>

                <Pressable style={styles.voltar} onPress={() => navigation.navigate('Login')}>

                    <Text style={{ fontSize: 15 }}>Voltar</Text>
                </Pressable>
            </View>
        </View>
    )
}

export default cadastro;

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
import { Text, View, TextInput, StyleSheet, Pressable, Image, Alert } from 'react-native';

import auth from "@react-native-firebase/auth";
import { useState } from 'react';
import { LoginProps } from '../types';



const tela = ({ navigation, route }: LoginProps) => {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    function logar() {
        setIsLoading(true);

        try {
            auth()
                .signInWithEmailAndPassword(email, senha)
                .then(() => { navigation.navigate('Home') })
                .catch((error) => console.log(error))
                .finally(() => setIsLoading(false))
        } catch (error) {
            console.log(error);
            setIsLoading(false);
        }
    }

    function redefinirSenha() {
        auth()
            .sendPasswordResetEmail(email)
            .then(() => Alert.alert("Redefinir Senha",
                "Enviamos  um email para você"))
            .catch((error) => setIsLoading(false))
    }

    return (
        <View style={styles.container}>
            <View style={styles.center}>
                <Image
                    source={require('../assets/bolsonaro2.jpg')} />
                <Text>Email</Text>
                <TextInput style={styles.box}
                    onChangeText={(text) => { setEmail(text) }} />
                <Text>Senha</Text>
                <TextInput style={styles.box}
                    onChangeText={(text) => { setSenha(text) }} />
                <Pressable style={styles.botao}
                    onPress={() => logar()}
                    disabled={isLoading} >

                    <Text style={{ fontSize: 20 }}> Login</Text>
                </Pressable>
            </View>

            <View style={styles.botoes}>
                <Pressable style={styles.esqueci}>

                    <Text style={{ fontSize: 15 }}> esqueci a senha</Text>
                </Pressable>
                <Pressable style={styles.conta} onPress={() => navigation.navigate('Cadastro')}>

                    <Text style={{ fontSize: 15 }}>criar conta</Text>
                </Pressable>


            </View>
        </View>
    )
}

export default tela;

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
        width: 80,
        height: 40,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 5,
        backgroundColor: '#d4d0cf',
        marginBottom: 20,
        alignItems: 'center',
        justifyContent: 'center',

    },
    esqueci: {
        width: 85,
        height: 45,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 5,
        backgroundColor: '#d4d0cf',
        //marginBottom: 20,
        // alignSelf: 'baseline',
        alignItems: 'center',
        justifyContent: 'center',
    },
    conta: {
        width: 85,
        height: 45,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 5,
        backgroundColor: '#d4d0cf',
        //marginBottom: 20,
        // alignSelf: 'flex-end',
        alignItems: 'center',
        justifyContent: 'center',
    },
    botoes: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'space-around',
        flex: 1
        
    },
    center: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 3
    },

});
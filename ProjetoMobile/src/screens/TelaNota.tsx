import { Text, View, TextInput, StyleSheet, Pressable, Alert, Image } from 'react-native';
import auth from "@react-native-firebase/auth";
import { useState } from 'react';
import { CadProps, NotasProps } from '../types';
import firestore from "@react-native-firebase/firestore";

const nota = ({ navigation, route }: NotasProps) => {

    const [titulo, setTitulo] = useState('');
    const [descricao, setDescricao] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    function cadastrarNota() {
        setIsLoading(true);

        firestore()
            .collection('notas')
            .add({
                titulo,
                descricao,
                created_at: firestore.FieldValue.serverTimestamp()
            })
            .then(() => {
                Alert.alert("Nota", "Cadastrada com sucesso")
                navigation.navigate('Home')
            })
            .catch((error) => console.log(error))
            .finally(() => setIsLoading(false));
    }
    return (
    <View style={styles.container}>
        <View style={styles.center}>
            <Image style={styles.imagem}
                source={require('../assets/elsa.jpeg')} />
            <Text>Titulo</Text>

            <TextInput style={styles.box} onChangeText={(text) => { setTitulo(text) }}/>

            <Text>Descricao</Text>

            <TextInput style={styles.box} onChangeText={(text) => { setDescricao(text) }} />

            <Pressable style={styles.botao} onPress={() => cadastrarNota()}>
                <Text style={{ fontSize: 20 }}> Cadastrar</Text>
            </Pressable>

            <Pressable style={styles.voltar} onPress={() => navigation.navigate('Login')}>

                <Text style={{ fontSize: 15 }}>Voltar</Text>
            </Pressable>
        </View>
    </View>
)
};



export default nota;


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
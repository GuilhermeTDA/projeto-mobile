import { Text, View, TextInput, StyleSheet, Pressable, Alert, Image, ScrollView } from 'react-native';
import { useState } from 'react';
import { ClienteProps } from '../types';
import firestore from "@react-native-firebase/firestore";

const cadastroCliente = ({ navigation, route }: ClienteProps) => {

    const [nome, setNome] = useState('');
    const [cpf, setCpf] = useState('');
    const [rua, setRua] = useState('');
    const [numero, setNumero] = useState('');
    const [bairro, setBairro] = useState('');
    const [complemento, setComplemento] = useState('');
    const [cidade, setCidade] = useState('');
    const [estado, setEstado] = useState('');
    const [dataNasc, setDataNasc] = useState('');
    const [isLoading, setIsLoading] = useState(false);


    function validateCpfInput (texto : string) {
        setCpf(texto.replace(/[^0-9]/g, '').replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4'));
    };

    function cadastrarCliente() {
        setIsLoading(true);

        firestore()
            .collection('Cliente')
            .add({
                nome,
                cpf,
                rua,
                numero,
                bairro,
                complemento,
                cidade,
                estado,
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
        <ScrollView>
            <View style={styles.container}>

                <View style={styles.center}>
                    <Image style={styles.imagem}
                        source={require('../assets/batman.jpg')} />
                    <Text>Nome</Text>

                    <TextInput style={styles.box} onChangeText={(text) => { setNome(text) }} />

                    <Text>cpf</Text>

                    <TextInput style={styles.box}
                        placeholder="###.###.###-##"
                        keyboardType="numeric"
                        value={cpf}
                        onChangeText={(text) => {  validateCpfInput(text) }} />

                    <Text>Nome da Rua</Text>

                    <TextInput style={styles.box} onChangeText={(text) => { setRua(text) }} />

                    <Text>Número</Text>

                    <TextInput style={styles.box}
                        placeholder="Apenas números"
                        keyboardType="numeric"
                        onChangeText={(text) => { setNumero(text) }} />

                    <Text>Bairro</Text>

                    <TextInput style={styles.box} onChangeText={(text) => { setBairro(text) }} />

                    <Text>Complemento</Text>

                    <TextInput style={styles.box} onChangeText={(text) => { setComplemento(text) }} />

                    <Text>Cidade</Text>

                    <TextInput style={styles.box} onChangeText={(text) => { setCidade(text) }} />

                    <Text>Estado</Text>

                    <TextInput style={styles.box} onChangeText={(text) => { setEstado(text) }} />

                    <Text>data de nascimento</Text>

                    <TextInput style={styles.box} onChangeText={(text) => { setDataNasc(text) }} />

                    <Pressable style={styles.botao}
                    onPress={() => {
                        cadastrarCliente(); }}>
                        <Text style={{ fontSize: 20 }}> Cadastrar cliente</Text>
                    </Pressable>

                </View>
                <Pressable style={styles.voltar} onPress={() => navigation.navigate('Home')}>

                    <Text style={{ fontSize: 15 }}>Voltar</Text>
                </Pressable>

            </View>



        </ScrollView >
    );
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
    botoes: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'space-around',
        flex: 1

    },
});
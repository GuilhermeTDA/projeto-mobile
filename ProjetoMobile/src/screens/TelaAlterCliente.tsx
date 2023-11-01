import { useEffect, useState } from "react";
import { Alert, Image, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import firestore from "@react-native-firebase/firestore";
import { AlterarClienteProps } from "../types";
import { IClientes } from "../models/IClientes";


const cadastroCliente = ({ navigation, route }: AlterarClienteProps) => {

    const [id,] = useState(route.params.id);
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

    function alterarCliente() {
        setIsLoading(true);

        firestore()
            .collection('Cliente')
            .doc(id)
            .update({
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
                Alert.alert("Cliente", "Alterado com sucesso")
                navigation.goBack();
            })

            .catch((error) => console.log(error))
            .finally(() => setIsLoading(false));
    }
    async function carregar() {
        setIsLoading(true);
        const resultado = await firestore()
            .collection('Cliente')
            .doc(id)
            .get();

        const cliente = {
            id: resultado.id,
            ...resultado.data()
        } as IClientes;

        setNome(cliente.nome);
        setCpf(cliente.cpf);
        setRua(cliente.rua);
        setNumero(cliente.numero);
        setBairro(cliente.bairro);
        setComplemento(cliente.complemento);
        setCidade(cliente.cidade);
        setEstado(cliente.estado);
        setDataNasc(cliente.dataNasc);
        setIsLoading(false);

    };

    useEffect(() => {
        carregar();
    }, []);

    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.center}>
                    {/* <Image style={styles.imagem}
                        source={require('../assets/sonic.jpg')} /> */}
                    <Text>Nome</Text>

                    <TextInput style={styles.box} value={nome} onChangeText={(text) => { setNome(text) }} />

                    <Text>cpf</Text>

                    <TextInput style={styles.box} value={cpf} onChangeText={(text) => { setCpf(text) }} />

                    <Text>Nome da Rua</Text>

                    <TextInput style={styles.box} value={rua} onChangeText={(text) => { setRua(text) }} />

                    <Text>Número</Text>

                    <TextInput style={styles.box} value={numero}
                    onChangeText={(text) => { setNumero(text) }} />

                    <Text>Bairro</Text>

                    <TextInput style={styles.box} value={bairro} onChangeText={(text) => { setBairro(text) }} />

                    <Text>Complemento</Text>

                    <TextInput style={styles.box} value={complemento} onChangeText={(text) => { setComplemento(text) }} />

                    <Text>Cidade</Text>

                    <TextInput style={styles.box} value={cidade} onChangeText={(text) => { setCidade(text) }} />

                    <Text>Estado</Text>

                    <TextInput style={styles.box} value={estado} onChangeText={(text) => { setEstado(text) }} />

                    <Text>data de nascimento</Text>

                    <TextInput style={styles.box} value={dataNasc} onChangeText={(text) => { setDataNasc(text) }} />


                    <Pressable style={styles.botao} onPress={() => alterarCliente()}>
                        <Text style={{ fontSize: 20 }}>Salvar alteração</Text>
                    </Pressable>

                    <Pressable style={styles.voltar} onPress={() => navigation.navigate('Home')}>

                        <Text style={{ fontSize: 15 }}>Voltar</Text>
                    </Pressable>
                </View>
            </ScrollView>
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
    botoes: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'space-around',
        flex: 1

    },
});
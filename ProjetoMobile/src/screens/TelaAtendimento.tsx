import { Text, View, TextInput, StyleSheet, Pressable, Alert, Image, ScrollView,Button } from 'react-native';
import { useState } from 'react';
import { AtendProps } from '../types';
import firestore from "@react-native-firebase/firestore";
import { IClientes } from '../models/IClientes';

const cadastroCliente = ({ navigation, route }: AtendProps) => {
    const [nome, setNome] = useState('');
    const [cpf, setCpf] = useState('');
    const [id, setId] = useState('');
    const [data, setData] = useState('');
    const [hora, setHora] = useState('');
    const [descricao, setDescricao] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    function clientAtend(nome: string, id: string, cpf: string) {
        setNome(nome);
         setId(id);
         setCpf(cpf);
  
      }

      
    function CadastrarAtendimento() {
        setIsLoading(true);

        firestore()
            .collection('Atendimento')
            .add({
                data,
                hora,
                descricao,
                created_at: firestore.FieldValue.serverTimestamp()
            })
            .then(() => {
                Alert.alert("Atendimento", "Atendimento cadastrado com sucesso")
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
                        source={require('../assets/mickey.jpg')} />

<Button title='buscar cliente' onPress={()=> navigation.navigate('ListarClientes', {clientAtend: clientAtend})}/>

                    <Text>Data</Text>

                    <TextInput style={styles.box}
                       keyboardType="numeric"
                    onChangeText={(text) => { setData }} />

                    <Text>Hora</Text>

                    <TextInput style={styles.box} 
                       keyboardType="numeric"
                    onChangeText={(text) => { setHora(text) }} />

                    <Text>Descrição </Text>

                    <TextInput style={styles.box} onChangeText={(text) => { setDescricao(text) }} />


                    <Pressable style={styles.botao} onPress={() => CadastrarAtendimento()}>
                        <Text style={{ fontSize: 20 }}> Cadastrar Atendimento</Text>
                    </Pressable>

                </View>
            </View>

        </ScrollView>

    )

};

export default cadastroCliente;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height:740,
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
        width: 150,
        height: 60,
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
    imagem: {
        width: 250,
        height: 250,

    },

});

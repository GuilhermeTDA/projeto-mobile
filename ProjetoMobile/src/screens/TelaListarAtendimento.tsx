import { Text, View, FlatList, StyleSheet, Pressable, Alert, Image, ScrollView } from 'react-native';
import { useState, useEffect } from 'react';
import { ListAtendProps } from '../types';
import firestore from "@react-native-firebase/firestore";
import { IAtend } from '../models/IAtend';

const cadastroCliente = ({ navigation, route }: ListAtendProps) => {

    const [Atendimento, setAtendimento] = useState([] as IAtend[]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);

        const subscribe = firestore()
            .collection('Atendimento')
            .onSnapshot(querySnapshot => {
                const data = querySnapshot.docs.map(doc => {

                    return {
                        id: doc.id,
                        ...doc.data()
                    }

                }) as IAtend[];

                setAtendimento(data);
                setIsLoading(false);
            });

        return () => subscribe();
    }, []);

    

    function deletarAtend(id: string) {
        setIsLoading(true);

        firestore()
            .collection('Atendimento')
            .doc(id)
            .delete()
            .then(() => {
                Alert.alert("Atendimento", "Removido com Sucesso")
                navigation.navigate("Home")
            })
            .catch((error) => console.log(error))
            .finally(() => setIsLoading(false))

    }

    return (
        <ScrollView>
            <View style={styles.container}>
                <Text style={{ fontSize: 30 }}>Listagem de Atendimentos</Text>
                <FlatList
                    data={Atendimento}
                    renderItem={(info) => {
                        return (
                            <View style={styles.card}>
                               
                                <View style={styles.dados_card}>
                                    <Text>{info.index}</Text>
                                    <Text>Data: {info.item.data}</Text>
                                    <Text>Descrição: {info.item.descricao}</Text>
                                    <Text>Hora: {info.item.hora}</Text>
                                </View>



                                <View style={styles.botao_deletar}>
                                    <Pressable
                                        onPress={() => deletarAtend(info.item.id)}>
                                        <Text style={{ fontWeight: "bold", fontSize: 50 }}>
                                            X
                                        </Text>
                                    </Pressable>
                                </View>

                            </View>
                        );
                    }}>

                </FlatList>

            </View >
        </ScrollView >

    )

};

export default cadastroCliente;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: 740,
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
    card: {
        borderWidth: 2,
        borderColor: 'yellow',
        margin: 5,
        borderRadius: 10,
        padding: 3,
        flexDirection: 'row',
        width: 380,
        right: 1,
    },
    dados_card: {
        flex: 1
    },
    botao_deletar: {
        backgroundColor: 'white',
        width: 50,
        justifyContent: 'center',
        alignItems: 'center'

    },
    footer: {
        width: 410,
        height: 200,
        marginLeft: 3
    },

});

import { Text, View, FlatList, StyleSheet, Pressable, Alert, Image, } from 'react-native';
import { useState, useEffect } from 'react';
import firestore from "@react-native-firebase/firestore";
import { IClientes } from '../models/IClientes';
import { ListarClientesProps } from '../types';


export default ({ navigation, route }: ListarClientesProps) => {
    const [clientes, setClientes] = useState([] as IClientes[]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);

        const subscribe = firestore()
            .collection('Cliente')
            .onSnapshot(querrySnapshot => {
                const data = querrySnapshot.docs.map(doc => {
                    return {
                        id: doc.id,
                        ...doc.data()
                    }

                }) as IClientes[];

                setClientes(data);
                setIsLoading(false);
            });

        return () => subscribe();
    }, []);

    function deletarCliente(id: string) {
        setIsLoading(true);

        firestore()
            .collection('Cliente')
            .doc(id)
            .delete()
            .then(() => {
                Alert.alert("Cliente", "Removido com sucesso")
                navigation.navigate('Home')
            })
            .catch((error) => console.log(error))
            .finally(() => setIsLoading(false));
    }

    function alterarCliente(id: string) {
        navigation.navigate("AlterarCliente",
            { id: id })
    }

    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 30 }}>Listagem de Clientes</Text>
            <FlatList
                data={clientes}
                renderItem={(info) => {
                    return (
                        <View style={styles.card}>
                            <View style={styles.dados_card}>
                                <Text>{info.index}</Text>
                                <Text style={{ fontSize: 35 }}>{info.item.nome}</Text>
                                <Text>{info.item.cpf}</Text>
                            </View>

                            <View style={styles.botao_alterar}>
                                <Pressable
                                    onPress={() => alterarCliente(info.item.id)}>
                                    <Text style={{ fontWeight: "bold", fontSize: 40 }}>
                                        A
                                    </Text>
                                </Pressable>
                            </View>

                            <View style={styles.botao_deletar}>
                                <Pressable
                                    onPress={() => deletarCliente(info.item.id)}>
                                    <Text style={{ fontWeight: "bold", fontSize: 50 }}>
                                        X
                                    </Text>
                                </Pressable>
                            </View>

                        </View>
                    );
                }}>

            </FlatList>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        borderWidth: 2,
        borderColor: 'gray',
        margin: 5,
        borderRadius: 10,
        padding: 3,
        flexDirection: 'row',
        width:200,
    },
    dados_card: {
        flex: 1
    },
    botao_deletar: {
        backgroundColor: 'red',
        width: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    botao_alterar: {
        backgroundColor: 'yellow',
        width: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#E0FFFF',
        margin: 10,
    },
});
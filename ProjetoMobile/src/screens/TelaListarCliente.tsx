import { Text, View, FlatList, StyleSheet, Pressable, Alert, Image, } from 'react-native';
import { useState, useEffect } from 'react';
import firestore from "@react-native-firebase/firestore";
import { IClientes } from '../models/IClientes';
import { ListarClientesProps } from '../types';

export default ({ navigation, route }: ListarClientesProps) => {
    const [cliente, setCliente] = useState([] as IClientes[]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);

        const subscribe = firestore()
            .collection('Cliente')
            .onSnapshot(querySnapshot => {
                const data = querySnapshot.docs.map(doc => {

                    return {
                        id: doc.id,
                        ...doc.data()
                    }

                }) as IClientes[];

                setCliente(data);
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
                Alert.alert("Cliente", "Removido com Sucesso")
                navigation.navigate("Home")
            })
            .catch((error) => console.log(error))
            .finally(() => setIsLoading(false))

    }
    function AlterarCliente(id: string) {
        navigation.navigate("AlterarCliente", { id: id })
    }

    return (
        <View style={styles.container}>
            <Image style={styles.imagem}
                source={require('../assets/walter2.jpg')} />
            <Text style={{ fontSize: 30 }}>Listagem de Clientes</Text>
            <FlatList
                data={cliente}
                renderItem={(info) => {
                    return (
                        <View style={styles.card}>
                             <Pressable  onPress={() => {
                                route.params.clientAtend(info.item.cpf,info.item.nome,info.item.id);
                                navigation.goBack()}}>
                            <View style={styles.dados_card}>
                                <Text>{info.index}</Text>
                                <Text style={{ fontSize: 35 }}>{info.item.nome}</Text>
                                <Text>CPF: {info.item.cpf}</Text>
                                <Text>Rua: {info.item.rua}</Text>
                                <Text>Numero: {info.item.numero}</Text>
                                <Text>Complemento: {info.item.complemento}</Text>
                                <Text>Bairro: {info.item.bairro}</Text>
                                <Text>Cidade: {info.item.cidade}</Text>
                                <Text>Estado: {info.item.estado}</Text>
                                <Text>Data de nascimento: {info.item.dataNasc}</Text>

                            </View>
                            </Pressable>
                            <View style={styles.botao_deletar}>
                                <Pressable
                                    onPress={() => deletarCliente(info.item.id)}>
                                    <Text style={{ fontWeight: "bold", fontSize: 50, backgroundColor: "red", margin: 3 }}>
                                        X
                                    </Text>
                                </Pressable>
                                <Pressable
                                    onPress={() => AlterarCliente(info.item.id)}>
                                    <Text style={{ fontWeight: "bold", fontSize: 50, backgroundColor: "green", margin: 3 }}>
                                        A
                                    </Text>
                                </Pressable>
                            </View>
                        </View>
                    );
                }} />

        </View>
    );

}

const styles = StyleSheet.create({
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
    imagem: {
        width: 250,
        height: 250,

    },
    botao_deletar: {
        backgroundColor: 'black',
        width: 50,
        justifyContent: 'center',
        alignItems: 'center'

    },
    footer: {
        width: 410,
        height: 200,
        marginLeft: 3
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#E0FFFF',
        margin: 10,


    },
});
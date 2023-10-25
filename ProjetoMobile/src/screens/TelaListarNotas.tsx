import { Text, View, TextInput, StyleSheet, Pressable, Alert, Image, FlatList } from 'react-native';
import auth from "@react-native-firebase/auth";
import { useState, useEffect } from 'react';
import { ListarNotasProps } from '../types';
import firestore from "@react-native-firebase/firestore";
import { INotas } from '../models/INotas';


export default ({ navigation, route }: ListarNotasProps) => {
    const [notas, setNotas] = useState([] as INotas[]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);

        const subscribe = firestore()
            .collection('notas')
            .onSnapshot(querrySnapshot => {
                const data = querrySnapshot.docs.map(doc => {
                    return {
                        id: doc.id,
                        ...doc.data()
                    }

                }) as INotas[];

                setNotas(data);
                setIsLoading(false);
            });

        return () => subscribe();
    }, []);

    function deletarNota(id: string) {
        setIsLoading(true);

        firestore()
            .collection('notas')
            .doc(id)
            .delete()
            .then(() => {
                Alert.alert("Nota", "Removido com sucesso")
                navigation.navigate('Home')
            })
            .catch((error) => console.log(error))
            .finally(() => setIsLoading(false));
    }

    return (
        <View style={styles.card}>
            <View style={styles.dados_card}>
                <Text >{info.index}</Text>
                <Text style={{ fontSize: 35 }}>{info.item.titulo}</Text>
                <Text >{info.item.descricao}</Text>
            </View>
            <View style={styles.botao_deletar}>
                <Pressable onPress={() => deletarNota(info.item.id)}>
                    <Text style={{ fontWeight: "bold", fontSize: 50 }}>
                        X
                    </Text>
                </Pressable>
            </View>
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
    },
    dados_card: {
        flex: 1
    },
    botao_deletar: {
        backgroundColor: 'red',
        width: 50,
        justifyContent: 'center',
        alignItems: 'center',
    }

});
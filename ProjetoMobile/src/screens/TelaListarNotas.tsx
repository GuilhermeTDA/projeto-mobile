import { Text, View, TextInput, StyleSheet, Pressable, Alert, Image,FlatList } from 'react-native';
import auth from "@react-native-firebase/auth";
import { useState, useEffect } from 'react';
import { CadProps } from '../types';
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

    return (
        <View>
            <Text style={{ fontSize: 30 }}>Listagem de Notas</Text>
            <FlatList
                data={notas}
                renderItem={(info) => {
                    return (
                        <View style={styles.card}>
                            <Text>{info.index}</Text>
                            <Text>{info.item.titulo}</Text>
                            <Text>{info.item.descricao}</Text>

                        </View>
                    );
                }}>

            </FlatList>
        </View>
    );

}

const styles = StyleSheet.create({
    card:{
        borderWidth:2,
        borderColor: 'gray',
        margin:5,
        borderRadius:10,
        padding:3,
    },
});
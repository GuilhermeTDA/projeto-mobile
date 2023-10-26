import { Text, View, TextInput, StyleSheet, Pressable, Alert, Image } from 'react-native';
import { useEffect, useState } from 'react';
import { AlterarNotaProps} from '../types';
import firestore from "@react-native-firebase/firestore";
import { INotas } from '../models/INotas';
import Carregamento from '../layouts/Carregamento';


const TelaAlterarNota = ({ navigation, route }: AlterarNotaProps) => {

    const [id,] = useState(route.params.id);
    const [palavra,] = useState(route.params.palavra);
    const [titulo, setTitulo] = useState('');
    const [descricao, setDescricao] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    async function carregar() {
        setIsLoading(true);
        const resultado = await firestore()
            .collection('notas')
            .doc(id)
            .get();

        const nota = {
            id: resultado.id,
            ...resultado.data()
        } as INotas;

        setTitulo(nota.titulo);
        setDescricao(nota.descricao);
        setIsLoading(false);

    };

    useEffect(() => {
        carregar();
    }, []);

    function alterar() {
        setIsLoading(true);

        firestore()
            .collection('notas')
            .doc(id)
            .update({
                titulo,
                descricao,
                created_at: firestore.FieldValue.serverTimestamp()
            })
            .then(() => {
                Alert.alert("Nota", "Cadastrada com sucesso")
                navigation.goBack();
            })

            .catch((error) => console.log(error))
            .finally(() => setIsLoading(false));
    }

    return (
        <View >
            <Carregamento isLoading={isLoading} />

            <Text>Título {palavra} </Text>

            <TextInput style={styles.caixa_texto}
                value={titulo}
                onChangeText={(text) => { setTitulo(text) }} />

            <Text>Descrição  </Text>

            <TextInput
                multiline
                numberOfLines={4}
                maxLength={100}
                style={styles.caixa_texto}
                value={descricao}
                onChangeText={(text) => { setDescricao(text) }} />

            <Pressable
                style={styles.botao}
                onPress={() => alterar()}
                disabled={isLoading}>
                <Text style={styles.desc_botao}>Alterar</Text>
            </Pressable>
        </View>
    );
}

export default TelaAlterarNota;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    caixa_texto: {
        width: '70%',
        color: 'black',
        borderWidth: 1,
        borderRadius: 4,
        margin: 3,
    },
    botao: {
        justifyContent: 'center',
        backgroundColor: 'green',
        paddingVertical: 10,
        paddingHorizontal: 30
    },
    desc_botao: {
        fontSize: 20
    },
    text_area: {
        borderWidth: 1,
        borderColor: 'grey'
    }
});
import { Text, View, StyleSheet, Pressable } from 'react-native';
import { ex2Props } from '../types';



const ex2 = ({ navigation, route }: ex2Props) => {

    return (
        <View style={styles.container} >
            <Pressable style={styles.botao} onPress={() => navigation.navigate('Exercicio1')}>

                <Text style={{ fontSize: 15 }}>exercicio 1</Text>
            </Pressable>

            <Pressable style={styles.botao} onPress={() => navigation.navigate('Exercicio3')}>

                <Text style={{ fontSize: 15 }}>exercicio 3</Text>
            </Pressable>
        </View>

    )
}

export default ex2;


const styles = StyleSheet.create({
    botao: {
        width: 80,
        height: 40,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 5,
        backgroundColor: '#d4d0cf',
        marginBottom: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#E0FFFF',
        margin: 10,
    },
});
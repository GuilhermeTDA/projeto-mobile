import { Text, View, TextInput, StyleSheet, Pressable, Image } from 'react-native';


const tela = () => {
    return (
        <View style={styles.container}>
            <Image
                source={require('../assets/bolsonaro2.jpg')} />
            <Text>Email</Text>
            <TextInput style={styles.box}></TextInput>
            <Text>Senha</Text>
            <TextInput style={styles.box}></TextInput>
            <Pressable style={styles.botao}>

                <Text style={{ fontSize: 20 }}> Login</Text>
            </Pressable>
            <Pressable style={styles.esqueci}>

                <Text style={{ fontSize: 15 }}> esqueci a senha</Text>
            </Pressable>
            <Pressable style={styles.conta}>

                <Text style={{ fontSize: 15 }}>criar conta</Text>
            </Pressable>

        </View>
    )
}

export default tela;

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
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
        width: 80,
        height: 40,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 5,
        backgroundColor: '#d4d0cf',
        marginBottom: 20,
        alignItems: 'center',

    },
    esqueci: {
        width: 85,
        height: 45,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 5,
        backgroundColor: '#d4d0cf',
        marginBottom: 20,
        alignSelf: 'baseline',
        alignItems: 'center',
    },
    conta:{
        width: 85,
        height: 45,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 5,
        backgroundColor: '#d4d0cf',
        marginBottom: 20,
        alignSelf: 'flex-end',
        alignItems: 'center',
    }

});
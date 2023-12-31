import { Text, View, TextInput, StyleSheet, Pressable, Alert, Image } from 'react-native';
import { useEffect, useState } from 'react';

type FilhoProps = {
    onClicar: () => void;
}

const Filho = (props: FilhoProps) => {
    return (
        <View style={styles.container_filho}>
            <Pressable onPress={() => { props.onClicar() }} >
                <Image style={styles.imagem} source={{ uri: '' }} />
            </Pressable>
        </View>
    );
}

const Pai = () => {
    const [quant, setQuant] = useState(0);

    function blabla() {
        setQuant(quant + 1)
    }

    return (
        <View style={styles.container_pai}>
            <Text style={{ fontSize: 40 }}>Clicks: {quant}</Text>
            <Filho onClicar={blabla} />
        </View>
    );
}

export default Pai;

const styles = StyleSheet.create({
    container_pai: { flex: 1 },
    container_filho: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imagem: {
        width: 300,
        height: 300,
        resizeMode: "center"
    }
})
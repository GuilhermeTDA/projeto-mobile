import React, {useState} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Image,
    ScrollView,
} from 'react-native';

const logo = {
    uri: 'https://reactnative.dev/img/tiny_logo.png',
    width: 64,
    height: 64,
  };
const App2 = () => {
    const [minhaString,setText ] = useState('');
    return (
        <>
             <View>
      <Text>{minhaString}</Text>
      <TextInput
        placeholder="Digite algo aqui..."
        style={{ borderWidth: 1, borderColor: 'gray', padding: 10}}
         onChangeText={newText => setText(newText)}
    
    defaultValue={minhaString}
      />
      
    </View>
    <View>
    <Text style={{padding: 10, fontSize: 42}}>
        {minhaString }
      </Text>
    </View>

    <ScrollView>
    <Text style={{fontSize: 96}}>Scroll me plz</Text>
    <Image source={bolso.png} />
    <Image source={bolso.png} />
    <Image source={bolso.png} />
    <Image source={bolso.png} />
    </ScrollView>
    </>
    );
}

export default App2;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red'
    },
});
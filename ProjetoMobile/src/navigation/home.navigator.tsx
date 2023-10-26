import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DetalhesScreen from "../screens/DetalhesScreen";
import HomeScreen from "../screens/HomeScreen";
import { RootStackParamList } from "../types";
import LoginScreen from "../screens/LoginScreen";
import CadScreen from "../screens/CadScreen";
import NotaScreen from "../screens/NotaScreen";
import CLienteScreen from "../screens/ClienteScreen";
import AlterarNotaScreen from "../screens/AlterarNotaScreen";

const Stack = createNativeStackNavigator<RootStackParamList>();

const HomeNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Detalhes" component={DetalhesScreen} />
          <Stack.Screen name="Cadastro" component={CadScreen} />
          <Stack.Screen name="Notas" component={NotaScreen} />
          <Stack.Screen name="CadCliente" component={CLienteScreen} />
          <Stack.Screen name="AlterarNota" component={AlterarNotaScreen} />
        </Stack.Navigator>
    )
  }

  export default HomeNavigator;
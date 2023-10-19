import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DetalhesScreen from "../screens/DetalhesScreen";
import HomeScreen from "../screens/HomeScreen";
import { RootStackParamList } from "../types";
import LoginScreen from "../screens/LoginScreen";

const Stack = createNativeStackNavigator<RootStackParamList>();

const HomeNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Detalhes" component={DetalhesScreen} />
        </Stack.Navigator>
    )
  }

  export default HomeNavigator;
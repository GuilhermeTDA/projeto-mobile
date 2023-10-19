import { NativeStackScreenProps } from "@react-navigation/native-stack";

type RootStackParamList = {
  Login: undefined;
  Home: undefined;
  Detalhes: undefined;
};
//Home
type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>;


//Login
type LoginProps = NativeStackScreenProps<RootStackParamList, 'Login'>;

export type { HomeProps, RootStackParamList, LoginProps };
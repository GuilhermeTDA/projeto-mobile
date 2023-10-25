import { NativeStackScreenProps } from "@react-navigation/native-stack";

type RootStackParamList = {
  Login: undefined;
  Home: undefined;
  Detalhes: undefined;
  Cadastro: undefined;
  Notas: undefined;
  INota: undefined;
  CadCliente: undefined;
};
//Home
type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>;


//Login
type LoginProps = NativeStackScreenProps<RootStackParamList, 'Login'>;

//Cadastro
type CadProps = NativeStackScreenProps<RootStackParamList, 'Cadastro'>;

//Notas
type NotasProps = NativeStackScreenProps<RootStackParamList, 'Notas'>;


//listarNotas
type ListarNotasProps = NativeStackScreenProps<RootStackParamList, 'INota'>;

//Cliente
type ClienteProps = NativeStackScreenProps<RootStackParamList, 'CadCliente'>;



export type { HomeProps, RootStackParamList, LoginProps, CadProps, NotasProps, ListarNotasProps, ClienteProps };
import { NativeStackScreenProps } from "@react-navigation/native-stack";

type RootStackParamList = {
  Login: undefined;
  Home: undefined;
  Detalhes: undefined;
  Cadastro: undefined;
  Notas: undefined;
  INota: undefined;
  CadCliente: undefined;
  AlterarNota: { id: string, palavra: string };
  AlterarCliente: { id: string };
  ListarNotas: undefined;
  ListarClientes: undefined;
};
//Home
type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

//Login
type LoginProps = NativeStackScreenProps<RootStackParamList, 'Login'>;

//Cadastro
type CadProps = NativeStackScreenProps<RootStackParamList, 'Cadastro'>;

//Notas
type NotasProps = NativeStackScreenProps<RootStackParamList, 'Notas'>;

//Cliente
type ClienteProps = NativeStackScreenProps<RootStackParamList, 'CadCliente'>;

type AlterarNotaProps = NativeStackScreenProps<RootStackParamList, 'AlterarNota'>;

type AlterarClienteProps = NativeStackScreenProps<RootStackParamList, 'AlterarCliente'>;

type ListarNotasProps = NativeStackScreenProps<RootStackParamList, 'ListarNotas'>;

type ListarClientesProps = NativeStackScreenProps<RootStackParamList, 'ListarClientes'>;

export type { HomeProps, RootStackParamList, LoginProps, CadProps, NotasProps, ListarNotasProps, ClienteProps, AlterarNotaProps, AlterarClienteProps, ListarClientesProps };
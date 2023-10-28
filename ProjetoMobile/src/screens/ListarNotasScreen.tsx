import { ListarNotasProps } from "../types";
import TelaListarNotas from "./TelaListarNotas";


const ListarNotaScreen = ({ navigation, route }: ListarNotasProps) => {
  return (
    <TelaListarNotas navigation={navigation} route={route} />
  );
};

export default ListarNotaScreen;
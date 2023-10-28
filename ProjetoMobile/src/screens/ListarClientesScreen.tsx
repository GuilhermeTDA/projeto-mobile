import { ListarClientesProps } from "../types";
import TelaListarCliente from "./TelaListarCliente";

const ListarClientesScreen = ({ navigation, route }: ListarClientesProps) => {
    return (
      <TelaListarCliente navigation={navigation} route={route} />
    );
  };
  
  export default ListarClientesScreen;
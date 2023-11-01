import { ListAtendProps } from "../types";
import TelaListarAtendimento from "./TelaListarAtendimento"
 
const ListarAtendScreen = ({ navigation, route }: ListAtendProps) => {
    return (
        <TelaListarAtendimento navigation={navigation} route={route} />
    );
};

export default ListarAtendScreen;
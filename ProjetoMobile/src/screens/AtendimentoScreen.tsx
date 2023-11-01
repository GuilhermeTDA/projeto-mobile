import { AtendProps } from "../types";
import TelaAtendimento from "./TelaAtendimento"

const AtendScreen = ({ navigation, route }: AtendProps) => {
    return (
        <TelaAtendimento navigation={navigation} route={route} />
    );
};

export default AtendScreen;
import { CadProps} from '../types';
import TelaCadastro from './TelaCadastro';

const CadScreen = ({ navigation, route }: CadProps) => {
  return (
    <TelaCadastro navigation={navigation} route={route} />
  );
};

export default CadScreen;
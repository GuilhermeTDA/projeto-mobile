import {ClienteProps} from '../types';
import TelaCadCliente from './TelaCadCliente';

const CadCliente = ({ navigation, route }: ClienteProps) => {
  return (
    <TelaCadCliente navigation={navigation} route={route} />
  );
};

export default CadCliente;
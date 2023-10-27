import {AlterarClienteProps} from '../types';
import TelaAlterCliente from './TelaAlterCliente';

const AlterCliente = ({ navigation, route }: AlterarClienteProps) => {
  return (
    <TelaAlterCliente navigation={navigation} route={route} />
  );
};

export default AlterCliente;
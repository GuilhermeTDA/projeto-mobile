import { AlterarNotaProps} from '../types';
import AlterarNota from './TelaAlterarNota';

const AlterarNotaScreen = ({ navigation, route }: AlterarNotaProps) => {
  return (
    <AlterarNota navigation={navigation} route={route} />
  );
};

export default AlterarNotaScreen;
import { NotasProps} from '../types';
import TelaNota from './TelaNota';

const NotaScreen = ({ navigation, route }: NotasProps) => {
  return (
    <TelaNota navigation={navigation} route={route} />
  );
};

export default NotaScreen;
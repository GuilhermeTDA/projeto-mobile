import { LoginProps } from '../types';
import TelaLogin from './TelaLogin';

const LoginScreen = ({ navigation, route }: LoginProps) => {
    return (
        <TelaLogin navigation={navigation} route={route} />
    );
};

export default LoginScreen;
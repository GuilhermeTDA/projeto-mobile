import { Text, View } from 'react-native';
import Principal from '../layouts/Principal';
import { HomeProps } from '../types';

const HomeScreen = ({ navigation, route }: HomeProps) => {
    return (
      <View style={{ flex: 1}}>
        <Principal navigation={navigation} route={route} />
      </View>
    );
  };

  export default HomeScreen;
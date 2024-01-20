import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens/HomeScreen';
import { SecondScreen } from '../screens/SecondScreen';
import TabNavigator from './TabNavigator';
import { AppStackList } from './navigation.types';

const { Navigator, Screen, Group } = createStackNavigator<AppStackList>();

const AppNavigator = () => {
  const PublicScreens = (
    <Group>
      <Screen name="Tabs" component={TabNavigator} />
      <Screen name="Home" component={HomeScreen} />
      <Screen name="Second" component={SecondScreen} />
    </Group>
  );

  return (
    <Navigator screenOptions={{ headerShown: false }}>
      {PublicScreens}
    </Navigator>
  );
};

export default AppNavigator;

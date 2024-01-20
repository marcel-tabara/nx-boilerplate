import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { FC } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { HomeScreen } from '../screens/HomeScreen';
import { SecondScreen } from '../screens/SecondScreen';
import { TabsStackList } from './navigation.types';

const { Navigator, Screen } = createBottomTabNavigator<TabsStackList>();
const ACTIVE_COLOR = '#459A9D';
const INACTIVE_COLOR = '#000000';

const TabNavigator: FC = () => {
  const { bottom } = useSafeAreaInsets();
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: ACTIVE_COLOR,
        tabBarInactiveTintColor: INACTIVE_COLOR,
        tabBarLabelStyle: {
          paddingBottom: 6,
        },
        tabBarStyle: {
          paddingTop: 4,
          height: bottom + 54,
        },
      }}
    >
      <Screen
        name="Home"
        options={{
          tabBarLabel: 'Home',
        }}
        component={HomeScreen}
      />
      <Screen
        name="Second"
        options={{
          tabBarLabel: 'Second',
        }}
        component={SecondScreen}
      />
    </Navigator>
  );
};

export default TabNavigator;

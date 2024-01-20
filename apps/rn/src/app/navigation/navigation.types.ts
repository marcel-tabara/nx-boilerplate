import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { CompositeScreenProps } from '@react-navigation/native';
import { StackScreenProps } from '@react-navigation/stack';

export type AppStackList = {
  Home: undefined;
  Second: undefined;
  Tabs: undefined;
};

export type TabsStackList = {
  Home: undefined;
  Second: undefined;
};

// AppStack screens navigation props
export type TabsNavigatorNavigationProps = StackScreenProps<
  AppStackList,
  'Tabs'
>;

// TabStack screens navigation props
export type HomeScreenNavigationProps = CompositeScreenProps<
  BottomTabScreenProps<TabsStackList, 'Home'>,
  TabsNavigatorNavigationProps
>;
export type SettingsScreenNavigationProps = CompositeScreenProps<
  BottomTabScreenProps<TabsStackList, 'Second'>,
  TabsNavigatorNavigationProps
>;

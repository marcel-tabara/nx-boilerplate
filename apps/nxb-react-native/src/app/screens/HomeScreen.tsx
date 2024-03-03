import { NxbComponentsButton } from '@nxb-components-react-native';
import { Text, View } from 'react-native';

const HomeScreen = () => {
  // externalApi.useFetchAllEntriesQuery();
  // internalApi.useFetchAllEntriesQuery();

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <NxbComponentsButton />
    </View>
  );
};

export { HomeScreen };

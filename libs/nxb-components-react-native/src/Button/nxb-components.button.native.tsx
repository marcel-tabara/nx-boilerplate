import { Button, View } from 'react-native';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface NxbComponentsProps {}

export const NxbComponentsButton = (props: NxbComponentsProps) => {
  const onPress = () => console.log('########## test');
  return (
    <View>
      <Button
        onPress={onPress}
        title="Test Button Native"
        color="#841584"
        accessibilityLabel="Learn more about this button"
        {...props}
      />
    </View>
  );
};

export default NxbComponentsButton;

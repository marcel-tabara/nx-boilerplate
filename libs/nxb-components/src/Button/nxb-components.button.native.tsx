import { Button, View } from 'react-native';

/* eslint-disable-next-line */
export interface NxbComponentsProps {}

export const NxbComponentsButton = (props: NxbComponentsProps) => {
  const onPress = () => undefined;
  return (
    <View>
      <Button
        onPress={onPress}
        title="Test Button"
        color="#841584"
        accessibilityLabel="Learn more about this button"
      />
    </View>
  );
};

export default NxbComponentsButton;

import { TouchableOpacity, View, Text } from 'react-native';

type ButtonIconProps = {
  title: string;
  type: 'owner' | 'purchaser';
  onPress: () => void;
  children: React.ReactNode;
}

export const ButtonIcon = ({ title, type, onPress, children }: ButtonIconProps) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={{
          flexDirection: 'row',
          padding: 15,
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 5,
          backgroundColor: '#e2e8f0'
        }}
      >
        <Text className="font-bold text-base pr-2">{title}</Text>
        {children}
      </View>
    </TouchableOpacity>
  );
};

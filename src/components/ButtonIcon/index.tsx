import { TouchableOpacity, View, Text } from 'react-native';
import { Container } from './styles';

type ButtonIconProps = {
  title: string;
  active: boolean;
  onPress: () => void;
  children: React.ReactNode;
}

export const ButtonIcon = ({ title, active, onPress, children }: ButtonIconProps) => {
  return (
    <Container onPress={onPress} active={active}>
      <Text className="font-bold text-base pr-2">{title}</Text>
      {children}
    </Container>
  );
};

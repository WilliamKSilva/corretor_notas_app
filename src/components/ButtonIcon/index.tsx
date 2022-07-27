import { Container, Text } from './styles';

type ButtonIconProps = {
  title: string;
  active: boolean;
  onPress: () => void;
  children: React.ReactNode;
}

export const ButtonIcon = ({ title, active, onPress, children }: ButtonIconProps) => {
  return (
    <Container onPress={() => onPress()} active={active}>
      <Text>{title}</Text>
      {children}
    </Container>
  );
};

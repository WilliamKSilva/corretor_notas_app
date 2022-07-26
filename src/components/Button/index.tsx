import { Container, Text } from './styles'

type ButtonProps = {
  title: string;
  onPress: () => void;
}

export const Button = ({ title, onPress }: ButtonProps) => {
  return (
    <Container onPress={() => onPress()}>
      <Text>{title}</Text>
    </Container>
  );
};

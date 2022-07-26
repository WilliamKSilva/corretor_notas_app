import { View, Text } from 'react-native';
import { InputForm } from '../../Input/InputForm';
import { Container, Header } from './styles';

export const UserData = () => {
  return (
    <Container>
      <Header>
        <Text className="text-base text-black-100">
          Dados do Cliente:
        </Text>
      </Header>
      <InputForm
        name="name"
        placeholder="Nome..."
        type="default"
        required
      />
      <InputForm
        name="phone"
        placeholder="Telefone..."
        type="phone-pad"
        required
      />
      <InputForm
        name="description"
        placeholder="Descrição..."
        type="default"
        required
      />
    </Container>
  );
};


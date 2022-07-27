import { InputForm } from '../../Input/InputForm';
import { Container, Header, Text } from './styles';

export const UserData = () => {
  return (
    <Container>
      <Header>
        <Text>
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


import { Control } from 'react-hook-form';
import { InputForm } from '../../Input/InputForm';
import { Container, Header, Text } from './styles';

type UserDataProps = {
  control: Control;
}

export const UserData = ({ control }: UserDataProps) => {
  return (
    <Container>
      <Header>
        <Text>
          Dados do Cliente:
        </Text>
      </Header>
      <InputForm
        name="name"
        control={control}
        placeholder="Nome..."
        type="default"
        required
      />
      <InputForm
        name="phone"
        control={control}
        placeholder="Telefone..."
        type="phone-pad"
        required
      />
      <InputForm
        name="description"
        control={control}
        placeholder="Descrição..."
        type="default"
        required
      />
      <InputForm
        name="method"
        control={control}
        placeholder="Método..."
        type="default"
        required
      />
    </Container>
  );
};


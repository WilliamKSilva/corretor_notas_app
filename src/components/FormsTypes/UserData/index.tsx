import { Control } from 'react-hook-form';
import { Dropdown } from '../../Dropdown';
import { InputDescriptionForm } from '../../Input/InputDescriptionForm';
import { InputForm } from '../../Input/InputForm';
import { InputMaskForm } from '../../Input/InputMaskForm';
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
      <InputMaskForm
        name="phone"
        control={control}
        placeholder="Número de telefone..."
        type="phone-pad"
        mask="phone"
        required
      />
      <InputDescriptionForm
        name="district"
        control={control}
        placeholder="Bairro(s)..."
        type="default"
        required
      />
    </Container>
  );
};


import { Control } from 'react-hook-form';
import { Dropdown } from '../../Dropdown';
import { InputDescriptionForm } from '../../Input/InputDescriptionForm';
import { InputForm } from '../../Input/InputForm';
import { InputMaskForm } from '../../Input/InputMaskForm';
import { Container, Header, Text } from './styles';

type UserDataProps = {
  control: Control;
  getCurrentDropdownValue: (value) => void;
}

export const UserData = ({ control, getCurrentDropdownValue }: UserDataProps) => {

  const options = [
    {
      label: "Aluguel",
      data: "rent"
    },
    {
      label: "Compra",
      data: "buy"
    }
  ]

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
      <Dropdown
        placeholder="Método..."
        getCurrentValue={getCurrentDropdownValue}
        options={options}
      />
      <InputDescriptionForm
        name="description"
        control={control}
        placeholder="Descrição..."
        type="default"
        required
      />
    </Container>
  );
};


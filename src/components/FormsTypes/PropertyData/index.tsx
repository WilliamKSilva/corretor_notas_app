import { Container, Text } from './styles';
import { InputForm } from "../../Input/InputForm";
import { Control } from 'react-hook-form';
import { InputMaskForm } from '../../Input/InputMaskForm';
import { Dropdown } from '../../Dropdown';

type PropertyDataProps = {
  type: 'owner' | 'purchaser';
  control: Control;
  getCurrentDropdownValue: (value) => void;
}

export const PropertyData = ({ type, control, getCurrentDropdownValue }: PropertyDataProps) => {

  const options = [
    {
      label: "Norte",
      data: "north"
    },
    {
      label: "Sul",
      data: "south"
    },
    {
      label: "Leste",
      data: "east"
    },
    {
      label: "Oeste",
      data: "west"
    },
    {
      label: "Centro",
      data: "center"
    }
  ]

  return (
    <Container>
      <Text>
        Dados do Imóvel:
      </Text>
      {type === 'purchaser' ? (
        <>
          <InputMaskForm
            name="value"
            control={control}
            placeholder="Valor médio do imóvel desejado..."
            type="numeric"
            mask="currency"
            required
          />
          <InputForm
            name="city"
            control={control}
            placeholder="Cidade..."
            type="default"
            required
          />
          <Dropdown
            options={options}
            getCurrentValue={getCurrentDropdownValue}
            placeholder="Região do imóvel..."
          />
        </>
      ) : (
        <>
          <InputMaskForm
            name="value"
            control={control}
            placeholder="Valor médio do imóvel desejado..."
            type="numeric"
            mask="currency"
            required
          />
          <InputForm
            name="city"
            control={control}
            placeholder="Cidade..."
            type="default"
            required
          />
          <InputForm
            control={control}
            name="street"
            placeholder="Rua..."
            type="default"
            required
          />
          <InputForm
            control={control}
            name="district"
            placeholder="Bairro..."
            type="default"
            required
          />
          <InputForm
            control={control}
            name="number"
            placeholder="Número do imóvel..."
            type="numeric"
            required
          />
        </>
      )}
    </Container>
  );
};

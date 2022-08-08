import { Container, Text } from './styles';
import { InputForm } from "../../Input/InputForm";
import { Control } from 'react-hook-form';
import { InputMaskForm } from '../../Input/InputMaskForm';

type PropertyDataProps = {
  control: Control;
}

export const PropertyData = ({ control }: PropertyDataProps) => {

  return (
    <Container>
      <Text>
        Dados do Imóvel:
      </Text>
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
    </Container>
  );
};

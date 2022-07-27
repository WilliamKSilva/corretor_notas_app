import { Container, Text } from './styles';
import { InputForm } from "../../Input/InputForm";
import { Control } from 'react-hook-form';

type PropertyDataProps = {
  type: 'owner' | 'purchaser';
  control: Control;
}

export const PropertyData = ({ type, control }: PropertyDataProps) => {
  return (
    <Container>
      <Text>
        Dados do Imóvel:
      </Text>
      {type === 'purchaser' ? (
        <>
          <InputForm
            name="value"
            control={control}
            placeholder="Valor médio do imóvel desejado..."
            type="numeric"
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
            name="region"
            control={control}
            placeholder="Região do imóvel desejado..."
            type="default"
            required
          />
        </>
      ) : (
        <>
          <InputForm
            name="value"
            control={control}
            placeholder="Valor médio do imóvel desejado..."
            type="numeric"
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

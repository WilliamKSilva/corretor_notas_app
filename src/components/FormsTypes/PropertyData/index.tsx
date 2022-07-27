import { Container, Text } from './styles';
import { InputForm } from "../../Input/InputForm";

type PropertyDataType = {
  type: 'owner' | 'purchaser';
}

export const PropertyData = ({ type }: PropertyDataType) => {
  return (
    <Container>
      <Text>
        Dados do Imóvel:
      </Text>
      {type === 'purchaser' ? (
        <>
          <InputForm
            name="value"
            placeholder="Valor médio do imóvel desejado..."
            type="numeric"
            required
          />
          <InputForm
            name="city"
            placeholder="Cidade..."
            type="default"
            required
          />
          <InputForm
            name="region"
            placeholder="Região do imóvel desejado..."
            type="default"
            required
          />
        </>
      ) : (
        <>
          <InputForm
            name="value"
            placeholder="Valor médio do imóvel desejado..."
            type="numeric"
            required
          />
          <InputForm
            name="city"
            placeholder="Cidade..."
            type="default"
            required
          />
          <InputForm
            name="street"
            placeholder="Rua..."
            type="default"
            required
          />
          <InputForm
            name="district"
            placeholder="Bairro..."
            type="default"
            required
          />
          <InputForm
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

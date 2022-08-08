import { ClientModel } from "../../../database/model/clientModel";
import { Column, Container, Description, Name, Row } from "./styles";

type ClientProps = {
  data: ClientModel;
};

export const Details = ({ data }: ClientProps) => {

  function handleMethod(method: string) {
    if (method === "purchaser") {
      return "Comprador";
    }

    return "Locatário";
  };

  return (
    <Container>
      <Row>
        <Name>Método: </Name>
        <Description>{handleMethod(data.method)}</Description>
      </Row>
      <Row>
        <Name>Valor: </Name>
        <Description>{data.value}</Description>
      </Row>
      <Row>
        <Name>Cidade: </Name>
        <Description>{data.city}</Description>
      </Row>
      <Column>
        <Name>Bairro(s): </Name>
        <Description>{data.district}</Description>
      </Column>
    </Container>
  );
};


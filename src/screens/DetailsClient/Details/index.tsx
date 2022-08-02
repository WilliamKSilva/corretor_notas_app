import { IClient } from "../../../interfaces/IClient";
import { Column, Container, Description, Name, Row } from "./styles";

type ClientProps = {
  data: IClient;
};

export const DetailsClientPurchaser = ({ data }: ClientProps) => {

  function handleMethod(method: string) {
    if (method === "buy") {
      return "Compra";
    }

    return "Aluguel";
  };

  function handleRegion(region: string) {
    switch (region) {
      case "north":
        return "Norte";
      case "south":
        return "Sul";
      case "west":
        return "Oeste";
      case "east":
        return "Leste";
      case "center":
        return "Centro";
    };
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
      <Row>
        <Name>Região: </Name>
        <Description>{handleRegion(data.region)}</Description>
      </Row>
      <Column>
        <Name>Descrição: </Name>
        <Description>{data.description}</Description>
      </Column>
    </Container>
  );
};

export const DetailsClientOwner = ({ data }: ClientProps) => {

  function handleMethod(method: string) {
    if (method === "buy") {
      return "Compra";
    }

    return "Aluguel";
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
      <Row>
        <Name>Bairro: </Name>
        <Description>{data.district}</Description>
      </Row>
      <Row>
        <Name>Rua e número: </Name>
        <Description>{data.street}, {data.number}</Description>
      </Row>
      <Column>
        <Name>Descrição: </Name>
        <Description>{data.description}</Description>
      </Column>
    </Container>
  );
};

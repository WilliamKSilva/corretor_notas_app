import React from "react";
import { Container, Header, Title } from "./styles";
import { DetailsClientPurchaser, DetailsClientOwner } from './Details';
import { useDetailsClient } from "./useDetailsClient";

export default function DetailsClient() {
  const { clientData, params } = useDetailsClient();

  return (
    <Container>
      <Header>
        <Title>{clientData.name}</Title>
      </Header>
      {params.type === "purchasers" ? (
        <DetailsClientPurchaser data={clientData} />
      ) : (
        <DetailsClientOwner data={clientData} />
      )}
    </Container>
  )
}
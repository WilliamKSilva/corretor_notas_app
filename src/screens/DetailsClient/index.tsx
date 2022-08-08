import React from "react";
import { Container, Header, Title } from "./styles";
import { Details } from './Details';
import { useDetailsClient } from "./useDetailsClient";

export default function DetailsClient() {
  const { clientData, params } = useDetailsClient();

  return (
    <Container>
      <Header>
        <Title>{clientData.name}</Title>
      </Header>
      <Details data={clientData} />
    </Container>
  )
}
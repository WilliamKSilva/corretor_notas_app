import React from "react";
import { Container, Phone, Text } from "./styles";

export type ClientProps = {
  id: string;
  name: string;
  phone: string;
}

export const Client = ({ id, name, phone }: ClientProps) => {
  return (
    <Container>
      <Text>{name}</Text>
      <Phone>{phone}</Phone>
    </Container>
  );
};

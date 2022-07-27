import React from "react";
import { Container, Text } from "./styles";

export type ClientProps = {
  item: {
    id: string;
    name: string;
    phone: string;
  }
}

export const Client = ({ item }: ClientProps) => {
  return (
    <Container>
      <Text>{item.name}</Text>
    </Container>
  );
};

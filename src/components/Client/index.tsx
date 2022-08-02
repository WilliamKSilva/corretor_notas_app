import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";
import { RootStackParamList } from "../../navigation/types";
import { Container, Phone, Text } from "./styles";

export type ClientProps = {
  id: string;
  name: string;
  phone: string;
}

type DetailsDataScreenProps = NativeStackNavigationProp<
  RootStackParamList,
  'DetailsClient'
>;

export const Client = ({ id, name, phone }: ClientProps) => {
  const { navigate } = useNavigation<DetailsDataScreenProps>();

  return (
    <Container onPress={() => navigate('DetailsClient', { clientId: id })}>
      <Text>{name}</Text>
      <Phone>{phone}</Phone>
    </Container>
  );
};

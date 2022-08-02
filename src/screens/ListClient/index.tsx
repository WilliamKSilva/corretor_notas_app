import { Container, Content, Header, Image, List, Message, WrapperDropdown } from "./styles";
import { Client } from "../../components/Client";
import { ClientData, useListClient } from "./useListClient";
import SearchingImage from '../../assets/undraw_Searching.png';
import SelectDropdown from 'react-native-select-dropdown';
import { MaterialIcons } from '@expo/vector-icons';
import { useTheme } from "styled-components/native";
import { Text } from "../../components/Text";
import { InputSearch } from "../../components/Input/InputSearch";
import { useState } from "react";


type ListClientProps = {
  item: {
    id: string;
    name: string;
    phone: string;
  }
};

type teste = {
  name: string;
}

export default function ListClient() {
  const { purchasers, clientType, owners, newData, setNewData, handleSelectClientType } = useListClient();
  const { colors } = useTheme();

  const filterClients = (value: string) => {
    if (clientType.data === 'purchaser') {
      const purchasersFiltered = purchasers.filter((client) => {
        if (!value) return true;
        if (client.name.toLowerCase().includes(value)) {
          return true;
        };
      });

      setNewData(purchasersFiltered);
    };

    if (clientType.data === 'owner') {
      const ownersFiltered = owners.filter((client) => {
        if (!value) return true;
        if (client.name.toLowerCase().includes(value)) {
          return true;
        }
      });

      setNewData(ownersFiltered);
    };
  };

  const dropdownOptions = [
    {
      data: "purchaser",
      label: "Compradores"
    },
    {
      data: "owner",
      label: "Proprietários"
    }
  ];

  return (
    <Container>
      <Header>
        <Text>Filtre seus clientes:</Text>
      </Header>
      <WrapperDropdown>
        <SelectDropdown
          data={dropdownOptions}
          onSelect={(value) => handleSelectClientType(value)}
          defaultButtonText="Tipos de cliente"
          buttonTextAfterSelection={(selectedItem) => {
            return selectedItem.label;
          }}
          defaultValue={clientType}
          rowTextForSelection={(item) => item.label}
          buttonStyle={{
            borderColor: colors.placeholder,
            backgroundColor: colors.input,
            alignItems: 'center',
            borderWidth: 0.2,
            borderRadius: 5,
          }}
          renderDropdownIcon={() => (
            <MaterialIcons
              name="keyboard-arrow-down"
              size={30}
              color={colors.primary}
            />
          )}
        />

        <InputSearch
          placeholder="Procure um cliente pelo nome..."
          onChangeText={(value) => filterClients(value)}
        />

      </WrapperDropdown>
      <Content>
        <List
          data={newData}
          keyExtractor={(item: any) => item.id}
          renderItem={({ item }: ListClientProps) => (
            <Client
              name={item.name}
              phone={item.phone}
              id={item.id}
            />
          )}
        />
      </Content>
    </Container>
  )
}
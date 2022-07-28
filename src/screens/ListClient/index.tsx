import { Container, Content, Header, Image, List, Message, WrapperDropdown } from "./styles";
import { Client } from "../../components/Client";
import { useListClient } from "./useListClient";
import SearchingImage from '../../assets/undraw_Searching.png';
import SelectDropdown from 'react-native-select-dropdown';
import { MaterialIcons } from '@expo/vector-icons';
import { useTheme } from "styled-components/native";
import { Text } from "../../components/Text";


type ListClientProps = {
  item: {
    id: string;
    name: string;
    phone: string;
  }
};

export default function ListClient() {
  const { purchasers, clientType, owners, setClientType } = useListClient();
  const { colors } = useTheme();

  const showClientsMessage = purchasers.length === 0 && owners.length === 0;

  const dropdownOptions = [
    {
      data: "purchaser",
      label: "Compradores"
    },
    {
      data: "owner",
      label: "Proprietários"
    }
  ]

  return (
    <Container>
      <Header>
        <Text>Filtre seus clientes</Text>
      </Header>
      <WrapperDropdown>
        <SelectDropdown
          data={dropdownOptions}
          onSelect={(value) => setClientType(value)}
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
      </WrapperDropdown>
      <Content>
        {showClientsMessage ? (
          <>
            <Message>Você ainda não possui clientes cadastrados!</Message>
            <Image
              source={SearchingImage}
            />
          </>
        ) : (
          <List
            data={clientType.data === "owners" ? owners : purchasers}
            keyExtractor={(item: any) => item.id}
            renderItem={({ item }: ListClientProps) => (
              <Client
                name={item.name}
                phone={item.phone}
                id={item.id}
              />
            )}
          />
        )}
      </Content>
    </Container>
  )
}
import { Container, Content, Header, List, Text } from "./styles";
import { Client, ClientProps } from "../../components/Client";
import { useListClient } from "./useListClient";


export default function ListClient() {
  const { purchasers } = useListClient();

  return (
    <Container>
      <Header>
        <Text>Filtre seus clientes</Text>
      </Header>
      <Content>
        <List
          data={purchasers}
          keyExtractor={(item: any) => item.id}
          renderItem={({ item }: ClientProps) => (
            <Client
              item={item}
            />
          )}
        />
      </Content>
    </Container>
  )
}
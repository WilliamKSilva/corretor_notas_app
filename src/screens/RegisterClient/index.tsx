import React from "react";
import { Button } from "../../components/Button";
import { ButtonIcon } from "../../components/ButtonIcon";
import { Text } from "../../components/Text";
import { FontAwesome5 } from '@expo/vector-icons';
import { PurchaserForm, OwnerForm } from "./Forms";
import { useRegisterClient } from "./useRegisterClient";
import { Container, Header, ScrollView, WrapperButton, Message, WrapperOptionsButton } from "./styles";

export default function RegisterClient() {
  const { isOwnerActivate, isPurchaserActivate, setIsOwnerActivate, setIsPurchaserActivate } = useRegisterClient();

  const handleOnPurchaser = () => {
    setIsPurchaserActivate(!isPurchaserActivate);
    setIsOwnerActivate(false);
  }

  const handleOnOwner = () => {
    setIsOwnerActivate(!isOwnerActivate);
    setIsPurchaserActivate(false);
  }

  const handleShowForms = () => {

    if (isOwnerActivate) {
      return (
        <OwnerForm />
      )
    }

    if (isPurchaserActivate) {
      return (
        <PurchaserForm />
      )
    }

    return (
      <Message>Selecione uma opção...</Message>
    );
  }

  return (
    <Container>
      <Header>
        <Text>
          Cadastre um Cliente:
        </Text>
        <WrapperOptionsButton>
          <ButtonIcon
            title="Proprietário"
            onPress={() => handleOnPurchaser()}
            active={isPurchaserActivate}
          >
            <FontAwesome5
              name="house-user"
              size={20}
              color="#0284C7"
            />
          </ButtonIcon>
          <ButtonIcon
            title="Comprador"
            onPress={() => handleOnOwner()}
            active={isOwnerActivate}
          >
            <FontAwesome5
              name="money-bill-alt"
              size={20}
              color="#0284C7"
            />
          </ButtonIcon>
        </WrapperOptionsButton>
      </Header>
      <ScrollView>
        {handleShowForms()}
      </ScrollView>
      <WrapperButton>
        <Button title="Salvar Cliente" onPress={() => console.log('teste')} />
      </WrapperButton>
    </Container>
  )
}
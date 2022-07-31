import React from "react";
import { Button } from "../../components/Button";
import { ButtonIcon } from "../../components/ButtonIcon";
import { Text } from "../../components/Text";
import { FontAwesome5 } from '@expo/vector-icons';
import { PurchaserForm, OwnerForm } from "./Forms";
import { useRegisterClient } from "./useRegisterClient";
import { Container, Header, ScrollView, WrapperButton, Message, WrapperOptionsButton } from "./styles";
import { useForm } from "react-hook-form";
import { NativeModal } from "../../components/NativeModal";

export default function RegisterClient() {
  const { handleSubmit, control } = useForm();

  const {
    isOwnerActivate,
    isPurchaserActivate,
    handleOnOwner,
    handleOnPurchaser,
    handleCreatePurchaser,
    message,
    showModal,
    setShowModal
  } = useRegisterClient();

  const handleShowForms = () => {

    if (isOwnerActivate) {
      return (
        <OwnerForm control={control} />
      )
    }

    if (isPurchaserActivate) {
      return (
        <PurchaserForm control={control} />
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
            onPress={() => handleOnOwner()}
            active={isOwnerActivate}
          >
            <FontAwesome5
              name="house-user"
              size={20}
              color="#0284C7"
            />
          </ButtonIcon>
          <ButtonIcon
            title="Comprador"
            onPress={() => handleOnPurchaser()}
            active={isPurchaserActivate}
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
        <Button title="Salvar Cliente" onPress={handleSubmit(handleCreatePurchaser)} />
      </WrapperButton>
      <NativeModal description={message} isVisible={showModal} setIsVisible={setShowModal} />
    </Container>
  )
}
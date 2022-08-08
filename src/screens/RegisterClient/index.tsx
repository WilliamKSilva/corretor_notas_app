import React from "react";
import { Button } from "../../components/Button";
import { ButtonIcon } from "../../components/ButtonIcon";
import { Text } from "../../components/Text";
import { FontAwesome5 } from '@expo/vector-icons';
import { ClientForm } from "./Forms";
import { useRegisterClient } from "./useRegisterClient";
import { Container, Header, ScrollView, WrapperButton, Message, WrapperOptionsButton } from "./styles";
import { useForm } from "react-hook-form";
import { NativeModal } from "../../components/NativeModal";

export default function RegisterClient() {
  const { handleSubmit, control } = useForm();

  const {
    handleOnTenant,
    handleOnPurchaser,
    message,
    showModal,
    setShowModal,
    handleCreateClient,
    isPurchaserActive,
    isTenantActive,
    selectedMethod
  } = useRegisterClient();

  const renderButtonCondition = isTenantActive || isPurchaserActive;

  return (
    <Container>
      <Header>
        <Text>
          Cadastre um Cliente:
        </Text>
        <WrapperOptionsButton>
          <ButtonIcon
            title="Locatário"
            onPress={() => handleOnTenant()}
            active={isTenantActive}
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
            active={isPurchaserActive}
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
        {selectedMethod ? <ClientForm control={control} /> : <Message>Selecione um tipo de cliente...</Message>}
      </ScrollView>
      <WrapperButton>
        {renderButtonCondition ? <Button title="Salvar Cliente" onPress={handleSubmit(handleCreateClient)} /> : null}
      </WrapperButton>
      <NativeModal description={message} isVisible={showModal} setIsVisible={setShowModal} />
    </Container>
  )
}
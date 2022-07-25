import React from "react";
import { View, ScrollView } from "react-native";
import { Button } from "../../components/Button";
import { ButtonIcon } from "../../components/ButtonIcon";
import { FontAwesome5 } from '@expo/vector-icons';
import { Text } from "../../components/Text";
import { PurchaserForm, OwnerForm } from "./Forms";
import { useRegisterClient } from "./useRegisterClient";

export default function RegisterClient() {
  const { selectedClientType, setSelectedClientType } = useRegisterClient();

  return (
    <View className="flex-1 items-center bg-slate-100">
      <Text>
        Cadastre um Cliente:
      </Text>
      <View className="w-11/12 flex-row p-2 justify-between">
        <ButtonIcon
          title="Proprietário"
          onPress={() => setSelectedClientType('purchaser')}
          type={selectedClientType}
        >
          <FontAwesome5
            name="house-user"
            size={20}
            color="#0284C7"
          />
        </ButtonIcon>
        <ButtonIcon
          title="Comprador"
          onPress={() => setSelectedClientType('owner')}
          type={selectedClientType}
        >
          <FontAwesome5
            name="money-bill-alt"
            size={20}
            color="#0284C7"
          />
        </ButtonIcon>
      </View>
      <ScrollView className="w-3/4 pt-15">
        {selectedClientType === 'owner' ? (
          <OwnerForm />
        ) : (
          <PurchaserForm />
        )}
      </ScrollView>
      <View className="p-9">
        <Button title="Salvar Cliente" onClick={() => console.log('teste')} />
      </View>
    </View>
  )
}
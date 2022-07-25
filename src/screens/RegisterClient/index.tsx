import React from "react";
import { View, ScrollView } from "react-native";
import { Button } from "../../components/Button";
import { ButtonIcon } from "../../components/ButtonIcon";
import { FontAwesome5 } from '@expo/vector-icons';
import { Text } from "../../components/Text";
import { InputForm } from "../../components/Input/InputForm";

export default function RegisterClient() {
  return (
    <View className="flex-1 items-center bg-slate-100">
      <Text>
        Cadastre um Cliente:
      </Text>
      <View className="w-11/12 flex-row p-2 justify-between">
        <ButtonIcon title="Proprietário">
          <FontAwesome5
            name="house-user"
            size={20}
            color="#0284C7"
          />
        </ButtonIcon>
        <ButtonIcon title="Comprador">
          <FontAwesome5
            name="money-bill-alt"
            size={20}
            color="#0284C7"
          />
        </ButtonIcon>
      </View>
      <ScrollView className="w-3/4 pt-15">
        <InputForm
          name="name"
          placeholder="Nome..."
          required
        />
        <InputForm
          name="name"
          placeholder="Nome..."
          required
        />
        <InputForm
          name="name"
          placeholder="Nome..."
          required
        />
        <InputForm
          name="name"
          placeholder="Nome..."
          required
        />
      </ScrollView>
      <View className="p-10">
        <Button title="Salvar Cliente" onClick={() => console.log('teste')} />
      </View>
    </View>
  )
}
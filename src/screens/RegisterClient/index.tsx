import React from "react"
import { View } from "react-native"
import { Button } from "../../components/Button"
import { ButtonIcon } from "../../components/ButtonIcon"
import { FontAwesome5 } from '@expo/vector-icons';

export default function RegisterClient() {
  return (
    <View className="flex-1 items-center bg-slate-100">
      <View className="w-11/12 flex-row p-2 justify-between">
        <ButtonIcon title="Proprietário">
          <FontAwesome5
            name="house-user"
            size={20}
          />
        </ButtonIcon>
        <ButtonIcon title="Comprador">
          <FontAwesome5
            name="money-bill-alt"
            size={20}
          />
        </ButtonIcon>
      </View>
    </View>
  )
}
import { View, Text } from 'react-native';
import { InputForm } from '../../../components/Input/InputForm';

export const UserData = () => {
  return (
    <View className="flex-1 pb-8 items-center">
      <View className="w-full items-start pt-7">
        <Text className="text-base text-black-100">
          Dados do Cliente:
        </Text>
      </View>
      <InputForm
        name="name"
        placeholder="Nome..."
        type="default"
        required
      />
      <InputForm
        name="phone"
        placeholder="Telefone..."
        type="phone-pad"
        required
      />
      <InputForm
        name="description"
        placeholder="Descrição..."
        type="default"
        required
      />
    </View>
  );
};


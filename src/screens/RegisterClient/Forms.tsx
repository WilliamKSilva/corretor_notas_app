import { View } from 'react-native';
import { InputForm } from '../../components/Input/InputForm';
import { PropertyData } from './FormsTypes/PropertyData';
import { UserData } from './FormsTypes/UserData';

export const PurchaserForm = () => {
  return (
    <View className="flex-1">
      <UserData />
      <PropertyData type="purchaser" />
    </View>
  );
};

export const OwnerForm = () => {
  return (
    <View>
      <UserData />
      <PropertyData type="owner" />
    </View>
  );
};


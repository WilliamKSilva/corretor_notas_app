import { Control } from 'react-hook-form';
import { Option } from '../../../components/Dropdown';
import { PropertyData } from '../../../components/FormsTypes/PropertyData';
import { UserData } from '../../../components/FormsTypes/UserData';
import { Container } from './styles';

export type FormProps = {
  control: Control;
  getUserDataSelect: (value: Option) => void;
  getPropertyDataSelect: (value: Option) => void;
}

export const PurchaserForm = ({ control, getUserDataSelect, getPropertyDataSelect }: FormProps) => {
  return (
    <Container>
      <UserData control={control} getCurrentDropdownValue={getUserDataSelect} />
      <PropertyData control={control} type="purchaser" getCurrentDropdownValue={getPropertyDataSelect} />
    </Container>
  );
};

export const OwnerForm = ({ control, getUserDataSelect, getPropertyDataSelect }: FormProps) => {
  return (
    <Container>
      <UserData control={control} getCurrentDropdownValue={getUserDataSelect} />
      <PropertyData control={control} type="owner" getCurrentDropdownValue={getPropertyDataSelect} />
    </Container>
  );
};


import { Control } from 'react-hook-form';
import { PropertyData } from '../../../components/FormsTypes/PropertyData';
import { UserData } from '../../../components/FormsTypes/UserData';
import { Container } from './styles';

type FormProps = {
  control: Control;
}

export const PurchaserForm = ({ control }: FormProps) => {
  return (
    <Container>
      <UserData control={control} />
      <PropertyData control={control} type="purchaser" />
    </Container>
  );
};

export const OwnerForm = ({ control }: FormProps) => {
  return (
    <Container>
      <UserData control={control} />
      <PropertyData control={control} type="owner" />
    </Container>
  );
};


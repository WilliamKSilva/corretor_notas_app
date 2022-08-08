import { Control } from 'react-hook-form';
import { PropertyData } from '../../../components/FormsTypes/PropertyData';
import { UserData } from '../../../components/FormsTypes/UserData';
import { Container } from './styles';

export type FormProps = {
  control: Control;
}

export const ClientForm = ({ control }: FormProps) => {
  return (
    <Container>
      <UserData control={control} />
      <PropertyData control={control} />
    </Container>
  );
};


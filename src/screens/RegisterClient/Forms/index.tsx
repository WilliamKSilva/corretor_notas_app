import { PropertyData } from '../../../components/FormsTypes/PropertyData';
import { UserData } from '../../../components/FormsTypes/UserData';
import { Container } from './styles';

export const PurchaserForm = () => {
  return (
    <Container>
      <UserData />
      <PropertyData type="purchaser" />
    </Container>
  );
};

export const OwnerForm = () => {
  return (
    <Container>
      <UserData />
      <PropertyData type="owner" />
    </Container>
  );
};


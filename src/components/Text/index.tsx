import { Container, CustomText } from './styles';

type TextProps = {
  children: React.ReactNode;
}

export const Text = ({ children }: TextProps) => {
  return (
    <Container>
      <CustomText>
        {children}
      </CustomText>
    </Container>
  );
};

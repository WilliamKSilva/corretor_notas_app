import { TextInputProps } from 'react-native';
import { TextInput } from './styles';

export const Input = ({ ...rest }: TextInputProps) => {
  return (
    <TextInput
      placeholderTextColor="#000000"
      {...rest}
    />
  );
};

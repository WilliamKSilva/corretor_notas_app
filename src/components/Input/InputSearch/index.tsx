import { TextInputProps } from 'react-native';
import { TextInput } from './styles';

export const InputSearch = ({ placeholder, ...rest }: TextInputProps) => {
  return (
    <>
      <TextInput placeholder={placeholder} placeholderTextColor="#000000" {...rest} />
    </>
  );
};

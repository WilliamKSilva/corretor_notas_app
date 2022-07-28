import { TextInputProps } from 'react-native';
import { maskCurrency, maskPhone } from '../../../utils/masks';
import { TextInput } from './styles';

interface InputMask extends TextInputProps {
  mask: string;
  inputMaskChange: (value: string) => void;
  textLength: number;
}

export const InputMask = ({ mask, inputMaskChange, ...rest }: InputMask) => {
  function handleChange(text: string) {
    if (mask === 'phone') {
      const value = maskPhone(text);
      inputMaskChange(value);
    }
    if (mask === 'currency') {
      const value = maskCurrency(text);
      inputMaskChange(value);
    }
  }

  function handleTextLength(mask: string) {
    if (mask === 'phone') {
      return 15;
    }
  }

  return (
    <TextInput
      onChangeText={(value) => handleChange(value)}
      placeholderTextColor="#000000"
      maxLength={handleTextLength(mask)}
      {...rest}
    />
  );
};

import { TextInputProps } from 'react-native';
import { TextInput } from './styles';

export const InputDescription = ({ ...rest }: TextInputProps) => {
  return (
    <TextInput
      placeholderTextColor="#000000"
      multiline={true}
      numberOfLines={5}
      style={{
        textAlignVertical: 'top'
      }}
      {...rest}
    />
  );
};

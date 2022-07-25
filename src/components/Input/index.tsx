import { TextInput, TextInputProps } from 'react-native';

export const Input = ({ ...rest }: TextInputProps) => {
  return (
    <TextInput
      className="w-full bg-slate-200 p-3 mt-10 rounded-md"
      placeholderTextColor="#000000"
      {...rest}
    />
  );
};

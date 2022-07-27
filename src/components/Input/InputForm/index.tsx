import { Control, Controller, useForm } from 'react-hook-form'
import { Input } from '../index';

type InputFormProps = {
  name: string;
  control: Control;
  placeholder: string;
  required: boolean;
  type: 'default' | 'numeric' | 'phone-pad';
}

export const InputForm = ({ name, control, placeholder, required, type }: InputFormProps) => {
  return (
    <>
      <Controller
        control={control}
        rules={{
          required: required
        }}
        render={({ field: { onChange, value } }) => (
          <Input
            onChangeText={onChange}
            value={value}
            placeholder={placeholder}
            keyboardType={type}
          />
        )}
        name={name}
      />
    </>
  );
};

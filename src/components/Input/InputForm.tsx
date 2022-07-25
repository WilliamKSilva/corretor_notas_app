import { Controller, useForm } from 'react-hook-form'
import { Input } from './index';

type InputFormProps = {
  name: string;
  placeholder: string;
  required: boolean;
}

export const InputForm = ({ name, placeholder, required }: InputFormProps) => {
  const { control } = useForm();

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
          />
        )}
        name={name}
      />
    </>
  );
};

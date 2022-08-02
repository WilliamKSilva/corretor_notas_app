import { Control, Controller } from 'react-hook-form'
import { InputDescription } from '../InputDescription';
import { InputMask } from '../InputMask';

type InputFormProps = {
  name: string;
  control: Control;
  placeholder: string;
  required: boolean;
  type: 'default' | 'numeric' | 'phone-pad';
}

export const InputDescriptionForm = ({ name, control, placeholder, required, type }: InputFormProps) => {
  return (
    <>
      <Controller
        control={control}
        rules={{
          required: required
        }}
        render={({ field: { onChange, value } }) => (
          <InputDescription
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

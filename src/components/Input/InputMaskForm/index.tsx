import { Control, Controller } from 'react-hook-form'
import { InputMask } from '../InputMask';

type InputFormProps = {
  name: string;
  control: Control;
  placeholder: string;
  required: boolean;
  type: 'default' | 'numeric' | 'phone-pad';
  mask: 'phone' | 'currency';
}

export const InputMaskForm = ({ name, control, placeholder, required, type, mask }: InputFormProps) => {
  return (
    <>
      <Controller
        control={control}
        rules={{
          required: required
        }}
        render={({ field: { onChange, value } }) => (
          <InputMask
            mask={mask}
            inputMaskChange={onChange}
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

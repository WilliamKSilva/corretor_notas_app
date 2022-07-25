import { TouchableOpacity, View, Text } from 'react-native';

type ButtonIconProps = {
  title: string;
  children: React.ReactNode;
}

export const ButtonIcon = ({ title, children }: ButtonIconProps) => {
  return (
    <TouchableOpacity>
      <View
        className="flex-row p-36 p-4 items-center justify-center bg-slate-200 rounded-sm"
      >
        <Text className="font-bold text-base pr-2">{title}</Text>
        {children}
      </View>
    </TouchableOpacity>
  );
};

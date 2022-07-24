import { Text, TouchableOpacity, View } from "react-native";

type ButtonProps = {
  title: string;
  onClick: () => void;
}

export const Button = ({ title, onClick }: ButtonProps) => {
  return (
    <TouchableOpacity onPress={() => onClick()}>
      <View
        className="w-36 p-2 bg-sky-600 items-center justify-center rounded-md"
      >
        <Text className="text-base font-semibold text-white">{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

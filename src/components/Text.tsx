import { View, Text as ReactNativeText } from 'react-native';

type TextProps = {
  children: React.ReactNode;
}

export const Text = ({ children }: TextProps) => {
  return (
    <View className="w-full p-7">
      <ReactNativeText className="text-lg font-normal text-black">
        {children}
      </ReactNativeText>
    </View>
  );
};

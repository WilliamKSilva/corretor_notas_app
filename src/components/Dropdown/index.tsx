import { MaterialIcons } from "@expo/vector-icons";
import React from "react";
import SelectDropdown from 'react-native-select-dropdown';
import { useTheme } from "styled-components/native";
import { Container } from "./styles";

export type Option = {
  data: string;
  label: string;
};

type DropdownProps = {
  options: Option[];
  placeholder: string;
  getCurrentValue: (value: Option) => void;
};

export const Dropdown = ({ options, placeholder, getCurrentValue }: DropdownProps) => {
  const { colors } = useTheme();

  return (
    <Container>
      <SelectDropdown
        data={options}
        onSelect={(value) => getCurrentValue(value)}
        rowTextForSelection={(item) => item.label}
        buttonStyle={{
          borderColor: colors.placeholder,
          backgroundColor: colors.input,
          alignItems: 'center',
          width: 250,
          borderWidth: 0.2,
          borderRadius: 5,
        }}
        defaultButtonText={placeholder}
        buttonTextAfterSelection={(selectedItem) => {
          return selectedItem.label;
        }}
        renderDropdownIcon={() => (
          <MaterialIcons
            name="keyboard-arrow-down"
            size={30}
            color={colors.primary}
          />
        )}
      />
    </Container>
  );
};

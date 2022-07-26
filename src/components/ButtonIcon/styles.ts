import styled from "styled-components/native";

type ButtonIconStylesProps = {
  active: boolean;
}

export const Container = styled.TouchableOpacity<ButtonIconStylesProps>`
  flex-direction: row;
  padding: 8px;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  background-color: ${({ theme, active }) => active ? theme.colors.primary : theme.colors.placeholder};
`;
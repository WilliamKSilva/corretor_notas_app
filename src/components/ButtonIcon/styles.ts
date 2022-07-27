import styled from "styled-components/native";

type ButtonIconStylesProps = {
  active: boolean;
}

export const Container = styled.TouchableOpacity<ButtonIconStylesProps>`
  flex-direction: row;
  padding: 12px;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  background-color: ${({ theme, active }) => active ? theme.colors.secondary : theme.colors.input};
`;

export const Text = styled.Text`
  font-size: ${({ theme }) => theme.fontsize.font_small}px;
  padding-right: 10px;
  color: ${({ theme }) => theme.colors.black};
`;
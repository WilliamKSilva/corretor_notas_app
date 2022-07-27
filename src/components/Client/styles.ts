import styled from "styled-components/native";

export const Container = styled.View`
  width: 70%;
  border-radius: 8px;
  padding: 10%;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.input};
`;

export const Text = styled.Text`
  font-size: ${({ theme }) => theme.fontsize.font_medium}px;
  color: ${({ theme }) => theme.colors.text};
`;
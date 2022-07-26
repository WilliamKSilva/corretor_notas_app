import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  align-items: flex-start;
`;

export const Text = styled.Text`
  font-size: ${({ theme }) => theme.fontsize.font_medium}px;
  color: ${({ theme }) => theme.colors.black};
`;
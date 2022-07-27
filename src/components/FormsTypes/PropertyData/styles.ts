import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  align-items: center;
`;

export const Text = styled.Text`
  font-size: ${({ theme }) => theme.fontsize.font_medium}px;
  font-weight: 500;
  align-self: flex-start;
  padding-top: 20px;
  color: ${({ theme }) => theme.colors.black};
`;
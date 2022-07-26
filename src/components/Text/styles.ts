import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  padding: 5px;
`;

export const CustomText = styled.Text`
  font-size: ${({ theme }) => theme.fontsize.font_medium}px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.black};
`;
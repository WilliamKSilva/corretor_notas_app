import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  padding: 15%;
  background-color: ${({ theme }) => theme.colors.white};
  align-items: center;
  justify-content: center;
  border-radius: 8px;
`;

export const Title = styled.Text`

`;

export const Description = styled.Text`
  font-size: ${({ theme }) => theme.fontsize.font_large}px;
  color: ${({ theme }) => theme.colors.black};
  padding-bottom: 20%;
  text-align: center;
  font-weight: 600;
`;
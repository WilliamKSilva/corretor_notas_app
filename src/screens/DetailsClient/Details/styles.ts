import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  align-items: center;
`;

export const Row = styled.View`
  width: 85%;
  padding: 8px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Column = styled.View`
  width: 90%;
  align-items: center;
`;

export const Name = styled.Text`
  font-size: ${({ theme }) => theme.fontsize.font_medium}px;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 600;
  padding-top: 10%;
`;

export const Description = styled.Text`
  font-size: ${({ theme }) => theme.fontsize.font_medium}px;
  color: ${({ theme }) => theme.colors.black};
  margin-top: 10%;
  text-align: center;
`;
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
  align-items: center;
`;

export const Header = styled.View`
  width: 100%;
  padding-top: 20%;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.fontsize.font_large}px;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 800;
  text-decoration: underline;
  padding-bottom: 10%;
`;

// description
// method
// value
// city
// region

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
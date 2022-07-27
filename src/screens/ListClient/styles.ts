import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
  align-items: center;
`;

export const Header = styled.View`
  width: 100%;
  height: 7%;
  elevation: 5;
  background-color: ${({ theme }) => theme.colors.white};
  padding: 15px;
  align-items: flex-start;
`;

export const Text = styled.Text`
  font-size: ${({ theme }) => theme.fontsize.font_medium}px;
  color: ${({ theme }) => theme.colors.black};
`;

export const Content = styled.View`
  width: 100%;
  align-items: center;
  padding-top: 10%;
`;

export const List = styled.FlatList``;
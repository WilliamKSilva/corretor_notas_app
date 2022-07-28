import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
  align-items: center;
`;

export const Header = styled.View`
  width: 100%;
  padding-top: 10%;
  padding-left: 10px;
`;

export const Text = styled.Text`
  font-size: ${({ theme }) => theme.fontsize.font_medium}px;
  color: ${({ theme }) => theme.colors.black};
`;

export const WrapperDropdown = styled.View`
  width: 100%;
  padding-top: 10%;
  align-items: center;
`;

export const Content = styled.View`
  width: 90%;
  align-items: center;
  padding-top: 10%;
`;

export const List = styled.FlatList`
  width: 100%;
`;

export const Image = styled.Image``;

export const Message = styled.Text`
  text-align: center;
  padding-top: 10%;
  font-size: ${({ theme }) => theme.fontsize.font_medium}px;
  font-weight: 300;
  color: ${({ theme }) => theme.colors.black};
`;
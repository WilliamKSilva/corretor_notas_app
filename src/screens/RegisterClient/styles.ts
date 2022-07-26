import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Header = styled.View`
  width: 80%;
  flex-direction: row;
  padding: 5px;
  justify-content: space-between;
`;

export const ScrollView = styled.ScrollView`
  width: 90%;
  padding-top: 20%;
`;

export const WrapperButton = styled.View`
  padding: 10px;
`;

export const Message = styled.Text`
  width: 100%;
  margin-top: 50%;
  margin-left: 25%;
  font-size: ${({ theme }) => theme.fontsize.font_medium}px;
  color: ${({ theme }) => theme.colors.placeholder};
`;
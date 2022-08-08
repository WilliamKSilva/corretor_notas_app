import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Header = styled.View`
  width: 100%;
  align-items: center;
  padding: 10px;
  padding-top: 10%;
`;

export const WrapperOptionsButton = styled.View`
  width: 80%;
  flex-direction: row;
  margin-top: ${({ theme }) => theme.constants.custom_margin_medium}%;
  justify-content: space-between;
`;

export const ScrollView = styled.ScrollView`
  flex: 1;
  width: 90%;
`;

export const WrapperButton = styled.View`
  padding: 19px;
`;

export const Message = styled.Text`
  width: 100%;
  margin-top: 40%;
  margin-left: 17%;
  font-weight: 400;
  font-size: ${({ theme }) => theme.fontsize.font_medium}px;
  color: ${({ theme }) => theme.colors.black};
`;
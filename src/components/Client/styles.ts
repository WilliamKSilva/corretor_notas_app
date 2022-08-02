import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  width: 340px;
  min-height: 130px;
  padding: ${({ theme }) => theme.constants.custom_padding_large}%;
  margin-bottom: 8%;
  border-radius: 8px;
  elevation: 5;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.input};
`;

export const Text = styled.Text`
  font-size: ${({ theme }) => theme.fontsize.font_large}px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.primary};
`;

export const Phone = styled.Text`
  font-size: ${({ theme }) => theme.fontsize.font_medium}px;
  padding-top: 6%;
  color: ${({ theme }) => theme.colors.black};
`;
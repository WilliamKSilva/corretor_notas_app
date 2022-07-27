import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  width: 100%;
  padding: 10px;
  elevation: 5;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const Text = styled.Text`
  font-size: ${({ theme }) => theme.fontsize.font_medium}px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text};
`;
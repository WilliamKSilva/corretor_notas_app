import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  width: 100%;
  padding: 8px;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
`;

export const Text = styled.Text`
  font-size: ${({ theme }) => theme.fontsize.font_medium}px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
`;
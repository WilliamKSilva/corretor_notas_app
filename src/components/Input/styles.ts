import styled from "styled-components/native";

export const TextInput = styled.TextInput`
  width: 100%;
  padding: ${({ theme }) => theme.constants.custom_padding}px;
  margin-top: 5px;
  border-radius: 8px;
`;
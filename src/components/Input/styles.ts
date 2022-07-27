import styled from "styled-components/native";

export const TextInput = styled.TextInput`
  width: 90%;
  padding: 10px;
  margin-top: 18px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.input};
`;
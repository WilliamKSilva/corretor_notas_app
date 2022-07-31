import styled from "styled-components/native";

export const TextInput = styled.TextInput`
  width: 70%;
  margin-top: 50px;
  padding: 10px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.input};
`;
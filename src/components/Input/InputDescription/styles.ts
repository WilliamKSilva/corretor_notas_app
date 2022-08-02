import styled from "styled-components/native";

export const TextInput = styled.TextInput`
  width: 90%;
  height: 150px;
  padding: 10px;
  margin-top: 18px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.input};
`;
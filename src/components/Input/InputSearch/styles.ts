import styled from "styled-components/native";

export const TextInput = styled.TextInput.attrs({
  borderWidth: 0.2,
  borderColor: "#000000"
})`
  width: 70%;
  margin-top: 50px;
  padding: 10px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.input};
`;
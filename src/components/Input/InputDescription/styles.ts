import styled from "styled-components/native";

export const TextInput = styled.TextInput.attrs({
  borderWidth: 0.2,
  borderColor: "#000000"
})`
  width: 90%;
  height: 150px;
  padding: 10px;
  margin-top: 18px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  background-color: ${({ theme }) => theme.colors.input};
`;
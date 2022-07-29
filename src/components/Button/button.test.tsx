import React from "react";
import { render } from '@testing-library/react-native';
import { Button } from ".";
import { ThemeProvider } from "styled-components/native";
import { defaultTheme } from "../../styles/default";

const Providers: React.FC = ({ children }) => (
  <ThemeProvider theme={defaultTheme}>
    {children}
  </ThemeProvider>
);

describe('Buttom component', () => {
  it('should render with all the passed props', () => {
    const { getByText, debug } = render(
      <Button title="test" onPress={() => console.log('test')} />,
      {
        wrapper: Providers
      }
    )

    const button = getByText('test');

    expect(button).toBeTruthy();

    debug();
  })

})
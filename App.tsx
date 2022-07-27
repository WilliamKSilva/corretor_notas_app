import { ThemeProvider } from 'styled-components/native';
import Navigation from "./src/navigation";
import { defaultTheme } from './src/styles/default';

export default function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Navigation />
    </ThemeProvider>
  );
}

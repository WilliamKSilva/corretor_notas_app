import "tailwindcss-react-native/types.d";
import { TailwindProvider } from 'tailwindcss-react-native';
import RegisterClient from "./src/screens/RegisterClient";

export default function App() {
  return (
    <TailwindProvider>
      <RegisterClient />
    </TailwindProvider>
  );
}

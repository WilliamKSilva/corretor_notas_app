import "tailwindcss-react-native/types.d";
import { TailwindProvider } from 'tailwindcss-react-native';
import Navigation from "./src/navigation";

export default function App() {
  return (
    <TailwindProvider>
      <Navigation />
    </TailwindProvider>
  );
}

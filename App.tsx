import "tailwindcss-react-native/types.d";
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TailwindProvider } from 'tailwindcss-react-native';
import RegisterClient from "./src/screens/RegisterClient";

export default function App() {
  return (
    <TailwindProvider>
      <RegisterClient />
    </TailwindProvider>
  );
}

import { Button, View } from "react-native";
import { useListClient } from "./useListClient";


export default function ListClient() {
  const { fetchData } = useListClient();

  return (
    <View>
      <Button onPress={() => fetchData()} title="teste" />
    </View>
  )
}
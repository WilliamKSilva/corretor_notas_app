import { RouteProp, useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { database } from "../../database";
import { ClientModel } from "../../database/model/clientModel";
import { RootStackParamList } from "../../navigation/types";


export function useDetailsClient() {
  const { params } = useRoute<RouteProp<RootStackParamList, 'DetailsClient'>>();

  const [clientData, setClientData] = useState({} as ClientModel);

  async function getClients() {
    const response = await database.get<ClientModel>("clients").find(params.clientId);

    setClientData(response);
  };

  useEffect(() => {
    getClients();
  }, []);

  return {
    clientData,
    params
  }
}
import { RouteProp, useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { database } from "../../database";
import { OwnerModel } from "../../database/model/ownerModel";
import { PurchaserModel } from "../../database/model/purchaserModel";
import { IClient } from "../../interfaces/IClient";
import { RootStackParamList } from "../../navigation/types";


export function useDetailsClient() {
  const { params } = useRoute<RouteProp<RootStackParamList, 'DetailsClient'>>();

  const [clientData, setClientData] = useState({} as IClient);

  async function getPurchasers() {
    const response = await database.get<PurchaserModel>("purchasers").find(params.clientId);

    setClientData(response);
  };

  async function getOwners() {
    const response = await database.get<OwnerModel>("owners").find(params.clientId);

    setClientData(response);
  };

  useEffect(() => {
    if (params.type === "purchasers") {
      getPurchasers();
    };

    getOwners();
  }, []);

  return {
    clientData,
    params
  }
}
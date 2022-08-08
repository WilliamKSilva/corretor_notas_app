import { RouteProp, useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { database } from "../../database";
import { TenantModel } from "../../database/model/tenantModel";
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

  async function getTenants() {
    const response = await database.get<TenantModel>("tenants").find(params.clientId);

    setClientData(response);
  };

  useEffect(() => {
    if (params.type === "purchasers") {
      getPurchasers();
    };

    getTenants();
  }, []);

  return {
    clientData,
    params
  }
}
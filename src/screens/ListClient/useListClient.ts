import { useCallback, useEffect, useState } from "react";
import { database } from "../../database";
import { ClientModel } from "../../database/model/clientModel";
import { useFocusEffect } from '@react-navigation/native';
import { Q } from "@nozbe/watermelondb";

type ClientType = {
  data: 'purchasers' | 'tenants';
  label: 'Compradores' | 'Locatários';
};

export function useListClient() {
  const [tenants, setTenants] = useState<ClientModel[]>([]);
  const [purchasers, setPurchasers] = useState<ClientModel[]>([]);
  const [clientType, setClientType] = useState<ClientType>({ label: 'Locatários', data: 'tenants' });
  const [newData, setNewData] = useState([]);

  async function getTenants() {
    const response = await database.get<ClientModel>('clients').query(Q.where('method', 'tenant')).fetch();

    setTenants(response);
    setNewData(response);
  };

  async function getPurchasers() {
    const response = await database.get<ClientModel>('clients').query(Q.where('method', 'purchaser')).fetch();

    setPurchasers(response);
    setNewData(response);
  };

  useFocusEffect(
    useCallback(() => {
      setClientType({ label: "Locatários", data: "tenants" });
      const initialClientData = getTenants();

      return () => initialClientData;
    }, [])
  );

  const handleSelectClientType = (value) => {
    setClientType(value);

    if (value.data === "tenants") {
      getTenants();
    }

    if (value.data === "purchasers") {
      getPurchasers();
    }
  };

  return {
    purchasers,
    getPurchasers,
    tenants,
    getTenants,
    clientType,
    setClientType,
    newData,
    setNewData,
    handleSelectClientType
  }
}
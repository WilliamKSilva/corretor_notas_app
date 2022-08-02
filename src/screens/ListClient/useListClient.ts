import { useCallback, useEffect, useState } from "react";
import { database } from "../../database";
import { OwnerModel } from "../../database/model/ownerModel";
import { PurchaserModel } from "../../database/model/purchaserModel";
import { useFocusEffect } from '@react-navigation/native';

type ClientType = {
  data: 'purchaser' | 'owner';
  label: 'Compradores' | 'Proprietários';
};

export interface ClientData {
  name: string;
  phone: string;
}

export function useListClient() {
  const [purchasers, setPurchasers] = useState<ClientData[]>([]);
  const [owners, setOwners] = useState<ClientData[]>([]);
  const [clientType, setClientType] = useState<ClientType>({ label: 'Compradores', data: 'purchaser' });
  const [newData, setNewData] = useState([]);

  async function getPurchasers() {
    const purchaserCollection = database.get<PurchaserModel>('purchasers');
    const response = await purchaserCollection.query().fetch();

    setPurchasers(response);
    setNewData(response);
  };

  async function getOwners() {
    const ownersCollection = database.get<OwnerModel>('owners');
    const response = await ownersCollection.query().fetch();

    setOwners(response);
    setNewData(response);
  }

  useFocusEffect(
    useCallback(() => {
      const initialClientData = getPurchasers();

      return () => initialClientData;
    }, [])
  );

  const handleSelectClientType = (value) => {
    setClientType(value);

    if (value.data === 'purchaser') {
      getPurchasers();
    }

    if (value.data === 'owner') {
      getOwners();
    }
  };

  return {
    purchasers,
    setPurchasers,
    owners,
    clientType,
    setClientType,
    newData,
    setNewData,
    handleSelectClientType
  }
}
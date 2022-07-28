import { useEffect, useState } from "react";
import { database } from "../../database";
import { OwnerModel } from "../../database/model/ownerModel";
import { PurchaserModel } from "../../database/model/purchaserModel";

type ClientType = {
  data: 'purchaser' | 'owners';
  label: 'Compradores' | 'Proprietários';
};

export function useListClient() {
  const [purchasers, setPurchasers] = useState<PurchaserModel[]>([]);
  const [owners, setOwners] = useState<OwnerModel[]>([]);
  const [clientType, setClientType] = useState<ClientType>({ label: 'Compradores', data: 'purchaser' });

  async function getPurchasers() {
    const purchaserCollection = database.get<PurchaserModel>('purchasers');
    const response = await purchaserCollection.query().fetch();

    setPurchasers(response);
  };

  async function getOwners() {
    const ownersCollection = database.get<OwnerModel>('owners');
    const response = await ownersCollection.query().fetch();

    setOwners(response);
  }

  useEffect(() => {
    getPurchasers();
  }, []);

  return {
    purchasers,
    owners,
    clientType,
    setClientType
  }
}
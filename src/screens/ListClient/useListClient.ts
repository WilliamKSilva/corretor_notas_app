import { useEffect, useState } from "react";
import { database } from "../../database";
import { PurchaserModel } from "../../database/model/purchaserModel";


export function useListClient() {
  const [purchasers, setPurchasers] = useState<PurchaserModel[]>([]);

  useEffect(() => {
    (async function fetchData() {
      const purchaserCollection = database.get<PurchaserModel>('purchasers');
      const response = await purchaserCollection.query().fetch();

      setPurchasers(response);
    })();
  }, [])

  return {
    purchasers
  }
}
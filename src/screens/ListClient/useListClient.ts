import { database } from "../../database";
import { PurchaserModel } from "../../database/model/purchaserModel";


export function useListClient() {

  async function fetchData() {
    const purchaserCollection = database.get<PurchaserModel>('purchasers');
    const response = await purchaserCollection.query().fetch();
    console.log(response);
  }

  return {
    fetchData
  }
}
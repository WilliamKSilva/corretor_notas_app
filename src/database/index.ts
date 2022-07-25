import { Database } from "@nozbe/watermelondb";
import SQLiteAdapter from "@nozbe/watermelondb/adapters/sqlite";

import { schemas } from "./schemas";
import { OwnerModel } from './model/ownerModel';
import { PurchaserModel } from "./model/purchaserModel";

const adapter = new SQLiteAdapter({
  schema: schemas
});

export const database = new Database({
  adapter,
  modelClasses: [OwnerModel, PurchaserModel]
})
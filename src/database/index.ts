import { Database } from "@nozbe/watermelondb";
import SQLiteAdapter from "@nozbe/watermelondb/adapters/sqlite";

import { schemas } from "./schemas";
import { TenantModel } from './model/tenantModel';
import { PurchaserModel } from "./model/purchaserModel";

const adapter = new SQLiteAdapter({
  schema: schemas
});

export const database = new Database({
  adapter,
  modelClasses: [TenantModel, PurchaserModel]
})
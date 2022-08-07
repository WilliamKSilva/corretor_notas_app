import { appSchema } from "@nozbe/watermelondb/Schema";
import { tenantSchema } from "./tenantSchema";
import { purchaserSchema } from "./purchaserSchema";

export const schemas = appSchema({
  version: 1,
  tables: [tenantSchema, purchaserSchema]
})
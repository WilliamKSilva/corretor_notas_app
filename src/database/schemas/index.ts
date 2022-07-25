import { appSchema } from "@nozbe/watermelondb/Schema";
import { ownerSchema } from "./ownerSchema";
import { purchaserSchema } from "./purchaserSchema";

export const schemas = appSchema({
  version: 1,
  tables: [ownerSchema, purchaserSchema]
})
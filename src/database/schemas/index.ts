import { appSchema } from "@nozbe/watermelondb/Schema";
import { clientSchema } from "./clientSchema";

export const schemas = appSchema({
  version: 2,
  tables: [clientSchema]
})
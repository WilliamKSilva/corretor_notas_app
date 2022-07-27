import { appSchema, tableSchema } from "@nozbe/watermelondb";

export const purchaserSchema = tableSchema({
  name: 'purchasers',
  columns: [
    {
      name: 'name',
      type: 'string'
    },
    {
      name: 'phone',
      type: 'string'
    },
    {
      name: 'description',
      type: 'string'
    },
    {
      name: 'method',
      type: 'string'
    },
    {
      name: 'created_at',
      type: 'number'
    },
    {
      name: 'value',
      type: 'number'
    },
    {
      name: 'city',
      type: 'string'
    },
    {
      name: 'region',
      type: 'string'
    }
  ]
}); 
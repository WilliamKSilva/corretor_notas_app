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
      name: 'date',
      type: 'string'
    },
    {
      name: 'value',
      type: 'number'
    },
    {
      name: 'region',
      type: 'string'
    }
  ]
}); 
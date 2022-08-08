import { tableSchema } from "@nozbe/watermelondb";

export const clientSchema = tableSchema({
  name: 'clients',
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
      name: 'district',
      type: 'string'
    },
    {
      name: 'method',
      type: 'string'
    },
    {
      name: 'value',
      type: 'string'
    },
    {
      name: 'city',
      type: 'string'
    },
  ]
}); 
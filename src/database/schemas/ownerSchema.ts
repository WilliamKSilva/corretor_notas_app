import { appSchema, tableSchema } from "@nozbe/watermelondb";

export const ownerSchema = tableSchema({
  name: 'owners',
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
      name: 'street',
      type: 'string',
    },
    {
      name: 'city',
      type: 'string'
    },
    {
      name: 'district',
      type: 'string'
    },
    {
      name: 'number',
      type: 'number'
    }
  ]
}); 
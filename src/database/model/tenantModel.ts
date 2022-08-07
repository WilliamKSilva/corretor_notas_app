import { Model } from "@nozbe/watermelondb";
import { field, date } from "@nozbe/watermelondb/decorators";

export class TenantModel extends Model {
  static table = 'owners'

  @field('name')
  name!: string;

  @field('phone')
  phone!: string;

  @field('description')
  description!: string;

  @field('method')
  method!: string;

  @date('created_at')
  created_at: number;

  @field('value')
  value!: string;

  @field('street')
  street!: string;

  @field('city')
  city!: string;

  @field('district')
  district!: string;

  @field('number')
  number!: number;
}
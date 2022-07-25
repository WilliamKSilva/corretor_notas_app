import { Model } from "@nozbe/watermelondb";
import { field } from "@nozbe/watermelondb/decorators";

export class PurchaserModel extends Model {
  static table = 'purchasers'

  @field('name')
  name!: string;

  @field('phone')
  phone!: string;

  @field('description')
  description!: string;

  @field('method')
  method!: string;

  @field('date')
  date!: string;

  @field('value')
  value!: number;

  @field('region')
  region!: string;
}
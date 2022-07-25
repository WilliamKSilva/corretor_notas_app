import { Model } from "@nozbe/watermelondb";
import { field } from "@nozbe/watermelondb/decorators";

export class OwnerModel extends Model {
  static table = 'owners'

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

  @field('street')
  street!: string;

  @field('city')
  city!: string;

  @field('district')
  district!: string;

  @field('number')
  number!: number;
}
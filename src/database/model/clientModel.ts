import { Model } from "@nozbe/watermelondb";
import { field } from "@nozbe/watermelondb/decorators";

export class ClientModel extends Model {
  static table = 'clients'

  @field('name')
  name!: string;

  @field('phone')
  phone!: string;

  @field('district')
  district!: string;

  @field('method')
  method!: string;

  @field('value')
  value!: string;

  @field('city')
  city!: string;
}
import { ItemListing } from './item-listing.model';

export class User {
  _id: string;
  username: string;
  password: string;
  firstName: String;
  lastName: String;
  age: Number;
  gender: string;
  image: String;
  email: String;
  createdOn: Date;
  favorites: ItemListing[];
  listedItems: ItemListing[];
}

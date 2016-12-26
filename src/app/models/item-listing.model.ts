export interface ItemListing {
  _id: string;
  owner: string;
  make: string;
  model: string;
  year: string;
  price: number;
  exteriorColor: string;
  interiorColor: string;
  engineTorque: number;
  enginePower: number;
  history: string;
  createdOn: Date;
  isActive: boolean;
}

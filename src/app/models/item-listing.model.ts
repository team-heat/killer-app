export class ItemListing {
  _id: string;
  make: string;
  model: string;
  year: number;
  price: number;
  exteriorColor: string;
  interiorColor: string;
  enginePower: number;
  createdOn: string;
  isActive: boolean;

  constructor(
    make: string,
    model: string,
    year: number,
    price: number,
    enginePower: number,
    exteriorColor: string,
    interiorColor: string,
    createdOn: string,
    isActive: boolean) {

    this.make = make;
    this.model = model;
    this.year = year;
    this.price = price;
    this.enginePower = enginePower;
    this.exteriorColor = exteriorColor;
    this.interiorColor = interiorColor;
    this.createdOn = createdOn;
    this.isActive = isActive;
  }
}

import { FileUploadResponse } from './file-upload-response.model';

export class ItemListing {
  _id: string;
  make: string;
  model: string;
  year: number;
  pictures: FileUploadResponse[];
  price: number;
  enginePower: number;
  exteriorColor: string;
  interiorColor: string;
  createdOn: Date;
  isActive: Boolean;
  isOwner: Boolean;
  owner: String;
}

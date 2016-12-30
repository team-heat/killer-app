import { User } from './user.model';

export interface Comment {
  listingId: string;
  author: User;
  content: string;
}

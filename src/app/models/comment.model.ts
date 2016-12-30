import { User } from './user.model';

export interface Comment {
  author: User;
  content: string;
}

import { Injectable } from '@angular/core';

@Injectable()
export class CommentFactoryService {

  createComment() {
    return new Comment()
  }
}

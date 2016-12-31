/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CommentFactoryService } from './comment-factory.service';

describe('Service: CommentFactory', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CommentFactoryService]
    });
  });

  it('should ...', inject([CommentFactoryService], (service: CommentFactoryService) => {
    expect(service).toBeTruthy();
  }));
});
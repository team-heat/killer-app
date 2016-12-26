import { Injectable } from '@angular/core';

@Injectable()
export class ApiUrlsConfigService {

  // POST -> login 
  // PUT  -> register
  // GET  -> details
  usersApiUrl: string = '/api/users';

  // GET  -> logout
  logoutApiUrl: string = '/api/logout';

  // GET  -> all items
  // POST -> create item
  // GET  /:id -> item details
  // PUT  /:id -> update listing
  // POST /:id -> submit offer
  galleryApiUrl: string = '/api/gallery';

  // GET  -> list favorites for logged on user
  // POST -> add item to logged user favorites list
  favoritesApiUrl: string = '/api/favorites';

  constructor() { }
}

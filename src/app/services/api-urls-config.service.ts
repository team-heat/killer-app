import { Injectable } from '@angular/core';

@Injectable()
export class ApiUrlsConfigService {

  mailApiUrl: string = '/api/mail';

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

  // GET requests only
  mostExpensiveItemsUrl: string = '/api/statistics/items/mostExpensiveItems';
  mostSaledMakesUrl: string = '/api/statistics/items/mostSaledMakes';
  mostOfferedItemsUrl: string = '/api/statistics/items/mostOfferedItems';
  topSellersUrl = '/api/statistics/users/topSellers';
  topBuyersUrl = '/api/statistics/users/topBuyers';
  topActiveUsersUrl = '/api/statistics/users/topActiveUsers';
  mostCommentedItemsUrl = '/api/statistics/items/mostCommentedItems';


  constructor() { }
}

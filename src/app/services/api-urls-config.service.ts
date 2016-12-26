import { Injectable } from '@angular/core';

@Injectable()
export class ApiUrlsConfigService {

  // POST -> login 
  // PUT  -> Register
  // GET  -> details
  usersApiUrl: string = '/api/users';

  // GET  -> logout
  logoutUrl: string = '/api/logout';

  constructor() { }

}

import { Injectable } from '@angular/core';
import { User } from './../models/user.model';

@Injectable()
export class UserFactoryService {

  constructor() { }

  createUser(username = '', password = '', firstName = '', lastName = '', image = '', email = ''): User {
    const newUser = new User();
    newUser.username = username;
    newUser.password = password;
    newUser.firstName = firstName;
    newUser.lastName = lastName;
    newUser.image = image;
    newUser.email = email;
    newUser.createdOn = new Date();

    return newUser;
  }
}

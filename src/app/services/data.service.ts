import { Injectable } from '@angular/core';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  users: User[];
  constructor() {
    this.users = [
      {
        firstName: 'Deivid',
        lastName: 'Mafra',
        email: 'deividmafra@aol.com',
        isActive: true,
        registered: new Date('01/02/2018 08:30:00'),
        hide: true
      },
      {
        firstName: 'Mary',
        lastName: 'Thompson',
        email: 'mary@yahoo.com',
        isActive: false,
        registered: new Date('03/11/2017 06:20:00'),
        hide: true
      },
      {
        firstName: 'Laura',
        lastName: 'Kawasaky',
        email: 'laura@gmail.com',
        isActive: false,
        registered: new Date('11/02/2016 10:20:00'),
        hide: false
      },
    ];
  }

  getUsers(): User[] {
    console.log('Fetching users from services...')
    return this.users;
  }

  addUser(user: User) {
    this.users.unshift(user);
  }
}

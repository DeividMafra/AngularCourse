import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[];
  showExtended: boolean = true;
  loaded: boolean = false;
  enableAdd: boolean = true;

  constructor() { }

  ngOnInit() {
    // console.log('init...');
    setTimeout(() => {
      this.users = [
        {
          firstName: 'Deivid',
          lastName: 'Mafra',
          age: 33,
          address: {
            street: '1101 Bay St',
            city: 'Toronto',
            province: 'ON'
          },

          isActive: true,

          registered: new Date('01/02/2018 08:30:00')

        },
        {
          firstName: 'Mary',
          lastName: 'Thompson',
          age: 30,
          address: {
            street: '2702 Bloor St',
            city: 'Toronto',
            province: 'ON'
          },

          isActive: false,

          registered: new Date('03/11/2017 06:20:00')
        },
        {
          firstName: 'Laura',
          lastName: 'Kawasaky',
          age: 36,
          address: {
            street: '3803 Younge St',
            city: 'Toronto',
            province: 'ON'
          },

          isActive: false,

          registered: new Date('11/02/2016 10:20:00')
        },
      ];
      this.loaded = true;

    }, 1000);


    // this.showExtended = false;

    this.addUser({
      firstName: 'Alexander',
      lastName: 'Duck',
      age: 28,
      address: {
        street: '3803 Younge St',
        city: 'Toronto',
        province: 'ON'
      }
    })

  }
  addUser(user: User) {
    this.users.push(user);
  }

}

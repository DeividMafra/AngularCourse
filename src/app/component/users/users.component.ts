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
  currentClasses = {};

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
          image: 'http://lorempixel.com/600/600/people/3',
          isActive: true
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
          image: 'http://lorempixel.com/600/600/people/2',
          isActive: false
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
          image: 'http://lorempixel.com/600/600/people/1',
          isActive: false
        },
      ];
      this.loaded = true;

      this.setCurrentClasses();
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

  setCurrentClasses() {
    this.currentClasses = {
      'btn-success': this.enableAdd,
      'big-text': this.showExtended
    }
  }

}

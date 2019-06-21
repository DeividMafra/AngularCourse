import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[];
  showExtended: boolean = false;
  loaded: boolean = false;
  enableAdd: boolean = false;
  showUserForm: boolean = false;
  user: User = {
    firstName: '',
    lastName: '',
    age: null,
    address: {
      street: '',
      city: '',
      province: ''
    }
  }

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
          registered: new Date('01/02/2018 08:30:00'),
          hide: false

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
          registered: new Date('03/11/2017 06:20:00'),
          hide: true
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
          registered: new Date('11/02/2016 10:20:00'),
          hide: false
        },
      ];
      this.loaded = true;

    }, 1000);


    // this.showExtended = false;

  }
  addUser() {
    this.user.isActive = true;
    this.user.registered = new Date();

    this.users.unshift(this.user);

    this.user = {
      firstName: '',
      lastName: '',
      age: null,
      address: {
        street: '',
        city: '',
        province: ''
      }
    }
  }
  // push and unshift is almost equal -- push add at the end and unshift add in the beggining


  fireEvent(e) {
    // console.log('Button clicked');
    console.log(e);
  }
  // toggleHide(user: User) {
  //   user.hide = !user.hide;

  // }

  onSubmit(e) {
    console.log(e.target.value);
  }

}

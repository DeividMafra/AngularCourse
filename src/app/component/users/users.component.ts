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
  showUserForm: boolean = true;
  user: User = {
    firstName: '',
    lastName: '',
    email: ''
  }

  constructor() { }

  ngOnInit() {
    // console.log('init...');
    setTimeout(() => {
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
      email: ''
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

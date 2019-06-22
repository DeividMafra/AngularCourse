import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from 'src/app/models/User';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  user: User = {
    firstName: '',
    lastName: '',
    email: ''
  }
  users: User[];

  showExtended: boolean = false;
  loaded: boolean = false;
  enableAdd: boolean = false;
  showUserForm: boolean = true;
  @ViewChild('userForm') form: any;

  constructor() { }

  ngOnInit() {

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
  }

  fireEvent(e) {
    console.log(e);
  }

  onSubmit({ value, valid }: { value: User, valid: boolean }) {
    if (!valid) {
      console.log('Form is not valid');
    } else {
      value.isActive = true;
      value.registered = new Date();
      value.hide = true;

      this.users.unshift(value);
      this.form.reset();
    }
  }

}

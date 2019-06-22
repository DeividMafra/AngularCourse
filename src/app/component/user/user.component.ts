import { Component, OnInit } from '@angular/core';
import { User } from '../../models/User';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    // template: '<h2> Deivid Mafra</h2>',
    styleUrls: ['./user.component.css']
    // styles: ['h2 {color: red}']

})

export class UserComponent implements OnInit {
    //properties
    user: User;
    //user: {
    // firstName: string,
    // lastName: string,
    // age: number,
    // address: {
    //     street: string,
    //     city: string,
    //     province: string
    // }

    //}

    // firstName = 'Deivid';
    // lastName = 'Mafra';
    // age = 33;
    // address = {
    //     street: '1101 Bay St',
    //     city: 'Toronto',
    //     province: 'ON'

    // // firstName: string;
    // // lastName: string;
    // // age: number;
    // // address;

    // // foo: any;

    // // hasKids: boolean;
    // // numberArray: number[];
    // // stringArray: string[];
    // // mixedArray: any[];
    // // myTuple: [string, number, boolean];
    // // unusable: void;
    // // n: undefined;
    // // u: null;





    constructor() {

    }
    ngOnInit() {
        this.user = {
            firstName: 'Deivid',
            lastName: 'Mafra',
            email: 'deividmafra@hotmail.com'


        }
    }
}



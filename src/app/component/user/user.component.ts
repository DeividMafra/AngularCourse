import { Component } from '@angular/core';
@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    // template: '<h2> Deivid Mafra</h2>',
    styleUrls: ['./user.component.css']
    // styles: ['h2 {color: red}']

})

export class UserComponent {
    //properties
    // firstName = 'Deivid';
    // lastName = 'Mafra';
    // age = 33;
    // address = {
    //     street: '1101 Bay St',
    //     city: 'Toronto',
    //     province: 'ON'

    firstName: string;
    lastName: string;
    age: number;
    address;

    foo: any;

    hasKids: boolean;
    numberArray: number[];
    stringArray: string[];
    mixedArray: any[];
    myTuple: [string, number, boolean];
    unusable: void;
    n: undefined;
    u: null;



    constructor() {
        this.firstName = 'Deivid';
        this.lastName = 'Mafra';
        this.age = 33;
        this.address = {
            street: '1101 Bay St',
            city: 'Toronto',
            province: 'ON'

        }
        this.foo = true;
        this.hasKids = true;
        this.numberArray = [1, 2, 3];
        this.stringArray = ['Hello', 'World'];
        this.mixedArray = [true, undefined, 'hello', 1, 0.20];
        this.myTuple = ['Deivid', 31, true];
        this.unusable = undefined;
        this.u = undefined;
        this.n = null;

        console.log(this.addNumber(2, 4));
        console.log(this.addNumber1(2, 4));
    }

    showAge() {
        return this.age;
    }

    addNumber(num1: number, num2: number): number {
        return num1 + num2;
    }

    addNumber1(num1: number, num2: number): boolean {
        return true;
    }


    // //methods
    // constructor() {
    //     // console.log('Hello console...');
    //     this.sayHello();
    //     console.log(this.age);
    //     this.hasBirthday();
    //     console.log(this.age);

    // }

    // sayHello() {
    //     console.log('Hello ' + this.firstName);
    // }

    // hasBirthday() {
    //     this.age += 1;
    // }
}
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NumberService {

  constructor() { }

  isInt(value: any) {
    return !isNaN(value) && (function (x) { return (x | 0) === x; })(parseFloat(value))
  }

  isFloat(n: any) {
    return Number(n) === n && n % 1 !== 0;
  }

  isNumeric(value: any) {
    return !isNaN(parseFloat(value)) && isFinite(value);
  }

  numericValidator(value: any) {
    if (value) {
      if (! /\D/.test(value)) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }

  //return true if the number is odd
  isOdd(num: any) {
    return num % 2 != 0;
  }

  // return true if the number is even
  isEven(num: any) {
    return num % 2 == 0;
  }




  getRandomNumber() {
    //generates 8 digit random integer as string
    return Math.floor((Math.random() * 100000000) + 9999999).toString();
  }
  isInteger(str:any) {
    if (str.match(/^(\d+)$/)) {
        return true;
    }
    return false;
};
}

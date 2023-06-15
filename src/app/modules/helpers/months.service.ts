import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MonthsService {
  daysInMonth:any = [ 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ];

  constructor() { }
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TimeService {

  constructor() { }
  // convert minutes to time
  minutesToTimeFormat(minutes: any) {
    const hours = Math.floor(minutes / 60);
    const minutesRemainder = minutes % 60;
    const formattedHours = hours < 10 ? `0${hours}` : `${hours}`;
    const formattedMinutes = minutesRemainder < 10 ? `0${minutesRemainder}` : `${minutesRemainder}`;
    return `${formattedHours}:${formattedMinutes}`;
  }
  
  // format time
  timeFromDateFormat(dateString: any) {
    const date = new Date(dateString);
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const formattedHours = hours < 10 ? `0${hours}` : `${hours}`;
    const formattedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const time = `${formattedHours}:${formattedMinutes}`;
    return time;
  }
  addMinutes(timestamp: any, minutes: any) {
    return new Date(timestamp + minutes * 60000).getTime();
  }
}

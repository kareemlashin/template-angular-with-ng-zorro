import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DateService {

  constructor() { }
  getWeekDays() {
    return {
      ar: {
        days: ['السبت', 'الأحد', 'الاثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة'],
        shortDays: ['س', 'أ', 'اث', 'ث', 'أر', 'خ', 'ج']
      },
      en: {
        days: ['Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        shortDays: ['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri']
      }
    }
  }
  getMonths() {
    return {
      ar: {
        months: ['يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو', 'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر'],
        shortMonths: ['ينا', 'فبر', 'مار', 'أبر', 'ماي', 'يون', 'يول', 'أغس', 'سبت', 'أكت', 'نوف', 'ديس']
      },
      en: {
        months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        shortMonths: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
      }
    }
  }
  getMonthsAndWeekAndDays() {
    return {
      ar: {
        days: ['السبت', 'الأحد', 'الاثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة'],
        shortDays: ['س', 'أ', 'اث', 'ث', 'أر', 'خ', 'ج'],
        months: ['يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو', 'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر'],
        shortMonths: ['ينا', 'فبر', 'مار', 'أبر', 'ماي', 'يون', 'يول', 'أغس', 'سبت', 'أكت', 'نوف', 'ديس']
      },
      en: {
        days: ['Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        shortDays: ['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
        months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        shortMonths: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
      }
    }
  }


  /**
   * Returns the number of years between two dates.
   */
  getYearsBetweenDates(date1: Date, date2: Date): number {
    const yearsDiff = date2.getFullYear() - date1.getFullYear();
    return yearsDiff;
  }

  /**
 * Returns the number of months between two dates.
 */
  getMonthsBetweenDates(date1: Date, date2: Date): number {
    const monthsDiff = (date2.getFullYear() - date1.getFullYear()) * 12 + (date2.getMonth() - date1.getMonth());
    return monthsDiff;
  }
  /**
* Returns true if the given `date1` is after the given `date2`.
*/
  isDateAfter(date1: Date, date2: Date): boolean {
    return date1.getTime() > date2.getTime();
  }
  /**
 * Returns true if the given `date1` is before the given `date2`.
 */
  isDateBefore(date1: Date, date2: Date): boolean {
    return date1.getTime() < date2.getTime();
  }
  /**
  * Returns the number of days between two dates.
  */
  getDaysBetweenDates(date1: Date, date2: Date): number {
    const oneDayMilliseconds = 86400000; // 1000 * 60 * 60 * 24
    const timeDiff = Math.abs(date2.getTime() - date1.getTime());
    const daysDiff = Math.ceil(timeDiff / oneDayMilliseconds);
    return daysDiff;
  }

  /**
 * Returns a string representation of a date in the format "MM/DD/YYYY".
 */
  formatDate(date: Date, shape: any = '/'): string {
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const year = date.getFullYear();
    return `${month}${shape}${day}${shape}${year}`;
  }
  formatDateType(date: Date, format: string): string {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    switch (format) {
      case 'shortDate':
        return `${month}/${day}/${year}`;
      case 'longDate':
        return `${new Intl.DateTimeFormat('en-US', { month: 'long' }).format(date)} ${day}, ${year}`;
      case 'isoDate':
        return `${year}-${month < 10 ? '0' : ''}${month}-${day < 10 ? '0' : ''}${day}`;
      case 'isoDateTime':
        return `${year}-${month < 10 ? '0' : ''}${month}-${day < 10 ? '0' : ''}${day}T${hours < 10 ? '0' : ''}${hours}:${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}Z`;
      default:
        throw new Error(`Invalid date format type: ${format}`);
    }
  }

  UTCToDate(utcTime: any, dateFormat: any) {
    var date = new Date(utcTime);
    var year = date.getFullYear();
    var month = ('0' + (date.getMonth() + 1)).slice(-2);
    var day = date.getDate();
    var formattedDate;
    switch (dateFormat) {
      case 'MM-DD-YYYY':
        formattedDate = month + '-' + day + '-' + year;
        break;
      case 'DD-MM-YYYY':
        formattedDate = day + '-' + month + '-' + year;
        break;
      case 'YYYY-MM-DD':
        formattedDate = year + '-' + month + '-' + day;
        break;
      case 'MM/DD/YYYY':
        formattedDate = month + '/' + day + '/' + year;
        break;
      case 'DD/MM/YYYY':
        formattedDate = day + '/' + month + '/' + year;
        break;
      case 'YYYY/MM/DD':
        formattedDate = year + '/' + month + '/' + day;
        break;
      default:
        formattedDate = year + '-' + month + '-' + day;
    }
    return formattedDate;
  }
  getWeekDaysByWeekNum(weekNum: any, year: any): any {
    if (weekNum && year) {
      var today = new Date(year, 0, 1 + ((weekNum - 1) * 7));
      var currentWeekDates = [];

      var mondayOfWeek = new Date(today.getFullYear(), today.getMonth(), today.getDate() - today.getDay() + 1, 0, 0, 0).getTime();
      var tuesdayOfWeek = new Date(today.getFullYear(), today.getMonth(), today.getDate() - today.getDay() + 2, 0, 0, 0).getTime();
      var wednesayOfWeek = new Date(today.getFullYear(), today.getMonth(), today.getDate() - today.getDay() + 3, 0, 0, 0).getTime();
      var thursdayOfWeek = new Date(today.getFullYear(), today.getMonth(), today.getDate() - today.getDay() + 4, 0, 0, 0).getTime();
      var fridayOfWeek = new Date(today.getFullYear(), today.getMonth(), today.getDate() - today.getDay() + 5, 0, 0, 0).getTime();
      var saturdayOfWeek = new Date(today.getFullYear(), today.getMonth(), today.getDate() - today.getDay() + 6, 0, 0, 0).getTime();
      var sundayOfWeek = new Date(today.getFullYear(), today.getMonth(), today.getDate() - today.getDay() + 7, 0, 0, 0).getTime();

      currentWeekDates.push(mondayOfWeek);
      currentWeekDates.push(tuesdayOfWeek);
      currentWeekDates.push(wednesayOfWeek);
      currentWeekDates.push(thursdayOfWeek);
      currentWeekDates.push(fridayOfWeek);
      currentWeekDates.push(saturdayOfWeek);
      currentWeekDates.push(sundayOfWeek);

      return currentWeekDates;
    }
  }
  getWeekNumber(d:any) {
    // Copy date so don't modify original
    d = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
    // Set to nearest Thursday: current date + 4 - current day number
    // Make Sunday's day number 7
    d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay()||7));
    // Get first day of year
    var yearStart:any = new Date(Date.UTC(d.getUTCFullYear(),0,1));
    // Calculate full weeks to nearest Thursday
    var weekNo = Math.ceil(( ( (d - yearStart) / 86400000) + 1)/7);
    // Return array of year and week number
    return [d.getUTCFullYear(), weekNo];
}
  //get the time difference between two timestamps as -- -- ago
  timeDifference(current: any, previous: any) {
    var msPerMinute = 60 * 1000;
    var msPerHour = msPerMinute * 60;
    var msPerDay = msPerHour * 24;
    var msPerMonth = msPerDay * 30;
    var msPerYear = msPerDay * 365;

    var elapsed = current - previous;

    if (elapsed < msPerMinute) {
      return Math.round(elapsed / 1000) + ' seconds ago';
    } else if (elapsed < msPerHour) {
      return Math.round(elapsed / msPerMinute) + ' minutes ago';
    } else if (elapsed < msPerDay) {
      return Math.round(elapsed / msPerHour) + ' hours ago';
    } else if (elapsed < msPerMonth) {
      return Math.round(elapsed / msPerDay) + ' days ago';
    } else if (elapsed < msPerYear) {
      return Math.round(elapsed / msPerMonth) + ' months ago';
    } else {
      return Math.round(elapsed / msPerYear) + ' years ago';
    }
  }
  //is given string a valid date
  isDate(txtDate: any) {
    let currVal: any = txtDate;
    if (currVal == '')
      return false;

    let rxDatePattern = /^(\d{1,2})(\/|-)(\d{1,2})(\/|-)(\d{4})$/; //Declare Regex
    let dtArray: any = rxDatePattern.test(txtDate); // is format OK?

    if (!dtArray)
      return false;

    //Checks for mm/dd/yyyy format.
    let dtMonth = dtArray[1];
    let dtDay = dtArray[3];
    let dtYear = dtArray[5];

    if (dtMonth < 1 || dtMonth > 12)
      return false;
    else if (dtDay < 1 || dtDay > 31)
      return false;
    else if ((dtMonth == 4 || dtMonth == 6 || dtMonth == 9 || dtMonth == 11) && dtDay == 31)
      return false;
    else if (dtMonth == 2) {
      var isleap = (dtYear % 4 == 0 && (dtYear % 100 != 0 || dtYear % 400 == 0));
      if (dtDay > 29 || (dtDay == 29 && !isleap))
        return false;
    }
    return true;
  }
}

import { Component } from '@angular/core';
import { DateArray } from 'src/app/data/enum-interface';
import { accountArray } from 'src/app/data/fake-data';

@Component({
  selector: 'app-date-table',
  templateUrl: './date-table.component.html',
  styleUrls: ['./date-table.component.css']
})
export class DateTableComponent {
  day: number;
  month: number;
  public accountArray: DateArray[] = accountArray;

  constructor() { }

  getDay(date: Date) {
    const milliseconds = Date.parse(date.toDateString());
    const now = Date.now();
    const ageInDay = Math.floor((now - milliseconds) / (1000 * 60 * 60 * 24));
    const year = Math.floor(ageInDay / 365);
    const day = Math.floor(ageInDay - (year * 365));
    return 365 - day;
  }

  getMonth(date: Date) {
    const newDate = new Date();
    const monthNow = newDate.getMonth();
    const monthBirthday = date.getMonth();
    const diffMonths = monthBirthday - monthNow;
    if (diffMonths <= 0 ) {
      return diffMonths + 12;
    } else {
      return diffMonths;
    }
  }

  getDifferenceInMonth(date: Date) {
    const dateNow = new Date();

  }

  compareAsc(dateOne: Date, dateTwo: Date) {
    const diff = dateOne.getTime() - dateTwo.getTime();

    if (diff < 0) {
      return -1;
    } else if (diff > 0) {
      return 1;
      // Return 0 if diff is 0; return NaN if diff is NaN
    } else {
      return diff;
    }
  }
}

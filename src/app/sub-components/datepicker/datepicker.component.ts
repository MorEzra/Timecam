import { AppService } from 'src/app/services/app.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DatePipe } from '@angular/common';
import * as moment from 'moment';

import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { DateAdapter, MAT_DATE_LOCALE } from '@angular/material/core';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss']
})
export class DatepickerComponent implements OnInit {
  datepipe: DatePipe;
  today: any;
  currMonth: any;
  currYear: any;

  leftArrow = faChevronLeft;
  rightArrow = faChevronRight;

  @Output() selectedDate = new EventEmitter<any>()

  constructor(public appService: AppService,
    private adapter: DateAdapter<Date>) { }

  ngOnInit(): void {
    this.appService.localeChange.subscribe(value => {
      this.currMonth = this.setMonthFormat(this.today);
      this.setDatepickerLocale();
    });

    this.setDatepickerLocale();

    this.today = new Date();
    this.currMonth = this.setMonthFormat(this.today);
    this.currYear = this.setYearFormat(this.today);

    //show only current month
    this.selectedDate.emit({ event: this.today, time: 'filtered' });
  }

  setDatepickerLocale() {
    if (this.appService.locale == 'en')
      this.adapter.setLocale('en-GB');
    else
      this.adapter.setLocale(this.appService.locale);
  }

  datesFilter = (d: Date): boolean => {
    //init datepicker
    this.today = new Date();
    if (d == null) return null;
    const today = d.getTime();
    const day = d.getDay();

    //fridays & saturdays commented
    return /*day !== 6 && day !== 5 &&*/ today < this.today;
  }

  onDateSelected(event) {
    this.currMonth = this.setMonthFormat(event.value);
    this.currYear = this.setYearFormat(event.value);

    this.selectedDate.emit({ event: event.value, time: 'all' });
  }

  setDate(action, time) {
    if (action == 'add')
      this.today = moment(this.today).add(1, time);
    else
      this.today = moment(this.today).subtract(1, time);

    if (time == 'month')
      this.currMonth = this.setMonthFormat(this.today);
    else
      this.currYear = this.setYearFormat(this.today);

    this.selectedDate.emit({ event: this.today, time: 'filtered' });
  }

  setMonthFormat(time) {
    return moment(time).locale(this.appService.locale).format("MMMM");
  }

  setYearFormat(time) {
    return moment(time).format("YYYY");
  }
}
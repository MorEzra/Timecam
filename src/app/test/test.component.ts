import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { TranslateService } from '@ngx-translate/core';
import * as moment from 'moment';
import { AppService } from '../services/app.service';

import { faSmile, faSmileBeam, faSmileWink } from '@fortawesome/free-solid-svg-icons';

interface UserData {
  date: any;
  hours: string;
  description: string;
  test1: string;
  test2: string;
  isEditEnabled: boolean;
}

const ELEMENT_DATA: UserData[] = [
  { date: moment().subtract(22, 'days'), hours: `${new Date(-1).getHours()}:${new Date(-1).getMinutes()}`, description: "העבודה שנעשתה", test1: 'Lorem ipsum dolor sit amet', test2: 'consectetur adipiscing', isEditEnabled: false },
  { date: moment().subtract(45, 'days'), hours: `${new Date(-1).getHours()}:${new Date(-1).getMinutes()}`, description: "העבודה לא נעשתה", test1: 'sed do eiusmod tempor', test2: 'incididunt ut labore et', isEditEnabled: false },
  { date: moment().subtract(6, 'days'), hours: `${new Date(-1).getHours()}:${new Date(-1).getMinutes()}`, description: "העבודה שנעשתה", test1: 'dolore magna aliqua', test2: 'Ut enim ad', isEditEnabled: false },
  { date: moment().subtract(10, 'days'), hours: `${new Date(-1).getHours()}:${new Date(-1).getMinutes()}`, description: "העבודה לא נעשתה", test1: 'sed do eiusmod tempor', test2: 'incididunt ut labore et', isEditEnabled: false },
  { date: moment().subtract(1, 'days'), hours: `${new Date(-1).getHours()}:${new Date(-1).getMinutes()}`, description: "העבודה שנעשתה", test1: 'Lorem ipsum dolor sit amet', test2: 'consectetur adipiscing', isEditEnabled: false },
  { date: moment().subtract(15, 'days'), hours: `${new Date(-1).getHours()}:${new Date(-1).getMinutes()}`, description: "העבודה שנעשתה", test1: 'dolore magna aliqua', test2: 'Ut enim ad', isEditEnabled: false },
  { date: moment().subtract(21, 'days'), hours: `${new Date(-1).getHours()}:${new Date(-1).getMinutes()}`, description: "העבודה לא נעשתה", test1: 'sed do eiusmod tempor', test2: 'incididunt ut labore et', isEditEnabled: false },
  { date: moment().subtract(8, 'days'), hours: `${new Date(-1).getHours()}:${new Date(-1).getMinutes()}`, description: "העבודה שנעשתה", test1: 'Lorem ipsum dolor sit amet', test2: 'consectetur adipiscing', isEditEnabled: false },
  { date: moment().subtract(14, 'days'), hours: `${new Date(-1).getHours()}:${new Date(-1).getMinutes()}`, description: "העבודה לא נעשתה", test1: 'dolore magna aliqua', test2: 'Ut enim ad', isEditEnabled: false },
  { date: moment().subtract(2, 'days'), hours: `${new Date(-1).getHours()}:${new Date(-1).getMinutes()}`, description: "העבודה שנעשתה", test1: 'sed do eiusmod tempor', test2: 'incididunt ut labore et', isEditEnabled: false },
  { date: moment().subtract(28, 'days'), hours: `${new Date(-1).getHours()}:${new Date(-1).getMinutes()}`, description: "העבודה שנעשתה", test1: 'Lorem ipsum dolor sit amet', test2: 'consectetur adipiscing', isEditEnabled: false },
  { date: moment().subtract(32, 'days'), hours: `${new Date(-1).getHours()}:${new Date(-1).getMinutes()}`, description: "העבודה לא נעשתה", test1: 'dolore magna aliqua', test2: 'Ut enim ad', isEditEnabled: false },
  { date: moment().subtract(38, 'days'), hours: `${new Date(-1).getHours()}:${new Date(-1).getMinutes()}`, description: "העבודה שנעשתה", test1: 'sed do eiusmod tempor', test2: 'incididunt ut labore et', isEditEnabled: false }
];

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  selectedDate: any;
  isFilterByDay: boolean;
  dataSource: MatTableDataSource<UserData>;
  dataSourceCopy: MatTableDataSource<UserData>;
  dataForSort: any;

  faSmile = faSmile;
  faSmileBeam = faSmileBeam;
  faSmileWink = faSmileWink;
  chosenIcon = faSmileBeam;

  constructor(public translate: TranslateService, public appService: AppService) { }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(ELEMENT_DATA);
    this.dataSourceCopy = new MatTableDataSource(ELEMENT_DATA);
  }

  setChosenIcon(iconName) {
    if (iconName == 'faSmile')
      this.chosenIcon = faSmile;
    else if (iconName == 'faSmileWink')
      this.chosenIcon = faSmileWink;
  }

  filterTableDataByDate(e) {
    this.selectedDate = moment(e.event);
    const month = moment(this.selectedDate).format("MM");
    const year = moment(this.selectedDate).format("YYYY");

    if (e.time == 'all') {
      this.isFilterByDay = true;
      this.dataSource.data = this.dataSourceCopy.data.filter(data => data.date >= this.selectedDate);
    }
    else if (e.time == 'filtered') {
      this.isFilterByDay = false;
      this.dataSource.data = this.dataSourceCopy.data.filter(data => moment(data.date).format("MM") == month && moment(data.date).format("YYYY") == year);
    }
    if (this.dataSource.paginator)
      this.dataSource.paginator.firstPage();
  }

  filterTableDataByText(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;

    //in order to keep filtering also by date
    if (this.isFilterByDay == true)
      //for current day ONLY - change condition to == . default is from the selected day and next
      this.dataSource.data = this.dataSourceCopy.data.filter(data =>
        data.date >= this.selectedDate &&
        this.isTextExists(data, filterValue.trim().toLowerCase()));
    else {
      this.dataSource.data = this.dataSourceCopy.data.filter(data =>
        this.getMonth(data.date) == this.getMonth(this.selectedDate) &&
        this.getYear(data.date) == this.getYear(this.selectedDate) &&
        this.isTextExists(data, filterValue.trim().toLowerCase()));
    }
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  isTextExists(data, text) {
    return data.description.toLowerCase().includes(text) ||
      data.test1.toLowerCase().includes(text) ||
      data.test2.toLowerCase().includes(text);
  }

  getMonth(date) {
    return moment(new Date(date)).format("MM");
  }

  getYear(date) {
    return moment(new Date(date)).format("YYYY");
  }
}

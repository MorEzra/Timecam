import { AppService } from '../app/services/app.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

//check translation files equality
type TranslationsSchemaType = typeof import("src/assets/i18n/en.json");

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'TimeCam';
  isMobile: boolean;

  constructor(private router: Router, public appService: AppService) { }

  ngOnInit() {
    this.appService.isMobileChange.subscribe(value => { this.isMobile = value });
  }

  onResize(event) {
    if (event.target.innerWidth < 900) {
      this.isMobile = true;
    } else {
      this.isMobile = false;
    }

    this.appService.isMobileChange.next(this.isMobile);
  }
}

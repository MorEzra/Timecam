import { TranslateService } from '@ngx-translate/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Location } from '@angular/common';
import { Directionality } from '@angular/cdk/bidi';
import { Subject } from 'rxjs';
import { DeviceDetectorService } from 'ngx-device-detector';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  public direction: any;
  public isRtl: boolean = false;
  public isMobile: boolean = this.deviceService.isMobile();

  public locale: string = 'en';
  public localeChange: Subject<string> = new Subject<string>();
  public isRtlChange: Subject<boolean> = new Subject<boolean>();
  public isMobileChange: Subject<boolean> = new Subject<boolean>();

  constructor(private http: HttpClient, private dir: Directionality, public translate: TranslateService, private deviceService: DeviceDetectorService, private location: Location) {
    const storedDir = localStorage.getItem('dir');
    if (storedDir) {
      this.direction = storedDir;
    } else {
      this.direction = dir.value;
      localStorage.setItem('dir', dir.value);
    }

    if (this.direction == 'rtl') {
      this.locale = 'he';
      this.isRtl = true;
    }

    this.translate.setDefaultLang(this.locale);
    //this.location.replaceState(`/${this.locale}`);

    this.isRtlChange.subscribe((value) => { this.isRtl = value });

    this.localeChange.subscribe((value) => { this.locale = value; });

    this.isMobileChange.subscribe((value) => { this.isMobile = value });
  }

  toggleLocale() {
    if (this.locale == 'en') {
      this.localeChange.next('he');
    } else {
      this.localeChange.next('en');
    }
  }

  toggleIsRtl() {
    this.isRtl = !this.isRtl;
    this.isRtlChange.next(this.isRtl);
  }

  setDirection(direction: any) {
    this.direction = direction;
  }

  onInputClick(e) {
    if (this.isMobile) {
      window.scroll({
        top: e.pageY - 140,
        left: 0,
        behavior: 'smooth'
      });
    }
  }
}
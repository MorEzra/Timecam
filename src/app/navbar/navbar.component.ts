import { AppService } from '../services/app.service';
import { Component, OnInit, Renderer2 } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  languageList: any[] = [
    { code: 'en', label: 'תרגם לעברית', dir: 'ltr' },
    { code: 'he', label: 'Translate to English', dir: 'rtl' }
  ];
  siteLanguage: string = this.languageList[0].label;

  userIcon = faUser;
  phoneIcon = faPhoneAlt;
  
  constructor(private renderer: Renderer2, private router: Router, private location: Location, public appService: AppService, public translate: TranslateService) { }

  ngOnInit(): void {
    this.translate.addLangs(['en', 'he']);

    //this.translate.setDefaultLang(this.appService.locale);

    this.setBodyDirection();

    this.adjustLanguage();
  }

  changeDirection(locale: string) {
    //this.location.replaceState(`/${locale}`);

    this.appService.toggleLocale();

    this.appService.toggleIsRtl();

    this.adjustLanguage();
    this.setBodyDirection();
  }

  setBodyDirection() {
    this.renderer.setAttribute(document.body, 'dir', this.appService.direction);
  }

  adjustLanguage() {
    //const pathArr = window.location.pathname.split('/');
    //this.appService.setLocale(pathArr[pathArr.length - 1]);
    let language = this.languageList.find(lang => lang.code == this.appService.locale);

    this.siteLanguage = language.label;
    this.appService.setDirection(language.dir);

    localStorage.setItem('dir', language.dir);

    this.translate.use(this.appService.locale);
  }
}

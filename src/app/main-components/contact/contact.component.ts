import { AppService } from 'src/app/services/app.service';
import { Component, OnInit } from '@angular/core';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  phoneIcon = faPhoneAlt;
  emailIcon = faEnvelope;

  constructor(public appService: AppService) { }

  ngOnInit(): void {
    window.scroll(0,0);
  }
}

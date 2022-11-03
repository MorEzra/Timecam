import { AppService } from 'src/app/services/app.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  userContactDetails: any = { fullname: '', phone: '', email: '' };
  contactFormGroup: FormGroup;
  fullnameFormControl: FormControl;
  phoneFormControl: FormControl;
  emailFormControl: FormControl;

  phoneIcon = faPhoneAlt;
  emailIcon = faEnvelope;

  constructor(public appService: AppService) { }

  ngOnInit(): void {
    this.fullnameFormControl = new FormControl("", [Validators.required, Validators.minLength(2), Validators.maxLength(40), Validators.pattern(/^[A-Za-z0-9 _]*[A-Za-z0-9][A-Za-z0-9 _]*$/)]);
    this.phoneFormControl = new FormControl("", [Validators.required, Validators.pattern("[0-9\s]{9,10}")]);
    this.emailFormControl = new FormControl("", [Validators.required, Validators.pattern(/\S+@\S+\.\S+/), Validators.minLength(6), Validators.maxLength(40)]);

    this.contactFormGroup = new FormGroup({
      fullname: this.fullnameFormControl,
      phone: this.phoneFormControl,
      email: this.emailFormControl
    })
  }
}

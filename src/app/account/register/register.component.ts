import { AppService } from 'src/app/services/app.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  userRegisterDetails: any = { companyName: '', fullname: '', phone: '', email: '' };
  registerFormGroup: FormGroup;
  companyNameFormControl: FormControl;
  fullnameFormControl: FormControl;
  phoneFormControl: FormControl;
  emailFormControl: FormControl;

  constructor(public appService: AppService) { }

  ngOnInit(): void {
    window.scroll(0,0);
    
    this.companyNameFormControl = new FormControl("", [Validators.required, Validators.minLength(2), Validators.maxLength(40), Validators.pattern(/^[A-Za-z0-9 _]*[A-Za-z0-9][A-Za-z0-9 _]*$/)]);
    this.fullnameFormControl = new FormControl("", [Validators.required, Validators.minLength(2), Validators.maxLength(40), Validators.pattern(/^[A-Za-z0-9 _]*[A-Za-z0-9][A-Za-z0-9 _]*$/)]);
    this.phoneFormControl = new FormControl("", [Validators.required, Validators.pattern("[0-9\s]{9,10}")]);
    this.emailFormControl = new FormControl("", [Validators.required, Validators.pattern(/\S+@\S+\.\S+/), Validators.minLength(6), Validators.maxLength(40)]);

    this.registerFormGroup = new FormGroup({
      companyName: this.companyNameFormControl,
      fullname: this.fullnameFormControl,
      phone: this.phoneFormControl,
      email: this.emailFormControl
    })
  }

}

import { AppService } from 'src/app/services/app.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  userLoginDetails: any = { username: '', password: '' };
  loginFormGroup: FormGroup;
  usernameFormControl: FormControl;
  passwordFormControl: FormControl;
  src: any = "../../../assets/images/customers-white.svg";

  constructor(public appService: AppService) { }

  ngOnInit(): void {
    window.scroll(0,0);
    this.initFormGroup();
  }

  initFormGroup() {
    this.usernameFormControl = new FormControl("", [Validators.required, Validators.pattern(/\S+@\S+\.\S+/), Validators.minLength(6), Validators.maxLength(40)]);
    this.passwordFormControl = new FormControl("", [Validators.required, Validators.minLength(6), Validators.maxLength(15), Validators.pattern(/^[A-Za-z0-9 _]*[A-Za-z0-9][A-Za-z0-9 _]*$/)]);

    this.loginFormGroup = new FormGroup({
      username: this.usernameFormControl,
      password: this.passwordFormControl
    })
  }

}

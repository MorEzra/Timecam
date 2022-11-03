import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AppService } from 'src/app/services/app.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.scss']
})
export class ForgotComponent implements OnInit {
  userForgotDetails: any = { username: '' };
  forgotFormGroup: FormGroup;
  usernameFormControl: FormControl;

  constructor(public appService: AppService) { }

  ngOnInit(): void {
    window.scroll(0,0);
    this.initFormGroup();
  }

  initFormGroup() {
    this.usernameFormControl = new FormControl("", [Validators.required, Validators.pattern(/\S+@\S+\.\S+/), Validators.minLength(6), Validators.maxLength(40)]);

    this.forgotFormGroup = new FormGroup({
      username: this.usernameFormControl
    })
  }

}

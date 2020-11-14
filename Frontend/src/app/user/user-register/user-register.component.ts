import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {

  registrationForm: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.registrationForm  = new FormGroup({
      userName: new FormControl('Mark', Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(8)]),
      confirmPassword: new FormControl(null, [Validators.required]),
      mobile: new FormControl(null, [Validators.required, Validators.maxLength(10)])
    }, this.passwordMatchingValidator);
  }

  passwordMatchingValidator(fg: FormGroup): Validators {
    return fg.get('password').value === fg.get('confirmPassword').value ? null : {notMatched: true};
  }

  onSubmit() {
    console.log(this.registrationForm);
  }

}

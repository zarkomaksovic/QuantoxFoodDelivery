import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';
import { errorHandler } from '@angular/platform-browser/src/browser';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  constructor(private authService: AuthService) { }
   err: any;
  ngOnInit() {

  }

  onSubmit(form: NgForm) {
  this.authService.registerUser({
    email: form.value.email,
    password: form.value.password
  });
  this.err = this.authService.errorDisplay;
  console.log('submin',this.err)
  }

}

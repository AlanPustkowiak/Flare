import { Component } from '@angular/core';
import { ILogin } from '../user/user.module';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
    selector: 'app-login',
    imports: [FormsModule, MatFormFieldModule, MatInputModule],
    templateUrl: './login.component.html',
    styleUrl: './login.component.css'
})
export class LoginComponent {
  credentials: ILogin = { email: '', password: '' };
  signInError: boolean = false;

  constructor(private route: Router) {}

  signIn(){
    this.signInError = false;
    if(this.credentials.email === 'admin' && this.credentials.password === 'admin'){
      this.route.navigate(['/home']);
    } else {
      this.signInError = true;
    }
  }
}

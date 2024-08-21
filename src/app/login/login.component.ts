import { Component } from '@angular/core';
import { ILogin } from '../user/user.module';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
<<<<<<< HEAD
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
=======
>>>>>>> 10b858a62bb9a80724b8c8bbe366344818fdae24

@Component({
  selector: 'app-login',
  standalone: true,
<<<<<<< HEAD
  imports: [ FormsModule, MatFormFieldModule, MatInputModule ],
=======
  imports: [ FormsModule ],
>>>>>>> 10b858a62bb9a80724b8c8bbe366344818fdae24
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

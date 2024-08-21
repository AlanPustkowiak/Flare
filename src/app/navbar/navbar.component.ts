import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
<<<<<<< HEAD
import { MatToolbarModule } from '@angular/material/toolbar';
=======
>>>>>>> 10b858a62bb9a80724b8c8bbe366344818fdae24

@Component({
  selector: 'app-navbar',
  standalone: true,
<<<<<<< HEAD
  imports: [ RouterLink, RouterOutlet, MatToolbarModule],
=======
  imports: [ RouterLink, RouterOutlet ],
>>>>>>> 10b858a62bb9a80724b8c8bbe366344818fdae24
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  constructor() {}


}

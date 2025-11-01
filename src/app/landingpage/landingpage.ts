import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landingpage',
  imports: [
    FormsModule,
    MatCardModule
  ],
  standalone: true,
  templateUrl: './landingpage.html',
  styleUrl: './landingpage.scss',
})
export class Landingpage {
  constructor(private router: Router){

  }

  logIn(){
    this.router?.navigate(['/home']);
  }
}

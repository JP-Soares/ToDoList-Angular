import { Component } from '@angular/core';
import { Menu } from '../menu/menu';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-home',
  imports: [
    Menu,
    MatIconModule,
    RouterLink
],
  templateUrl: './home.html',
  styleUrl: './home.scss',
  standalone: true
})
export class Home {

}

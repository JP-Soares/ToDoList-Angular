import { Component } from '@angular/core';
import { Menu } from '../menu/menu';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-home',
  imports: [
    Menu,
    MatIconModule
],
  templateUrl: './home.html',
  styleUrl: './home.scss',
  standalone: true
})
export class Home {

}

import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
@Component({
  selector: 'app-menu',
  imports: [
    MatToolbarModule
  ],
  templateUrl: './menu.html',
  styleUrl: './menu.scss',
  standalone: true
})
export class Menu {

}

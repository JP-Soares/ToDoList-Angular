import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink } from "@angular/router";
import { MatIcon } from "@angular/material/icon";
@Component({
  selector: 'app-menu',
  imports: [
    MatToolbarModule,
    RouterLink,
    MatIcon
],
  templateUrl: './menu.html',
  styleUrl: './menu.scss',
  standalone: true
})
export class Menu {

}

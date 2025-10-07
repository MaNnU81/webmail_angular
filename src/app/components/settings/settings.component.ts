import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { NavbarComponent } from "../navbar/navbar.component";
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-settings',
  imports: [HeaderComponent, NavbarComponent, RouterModule],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.scss'
})
export class SettingsComponent {

}

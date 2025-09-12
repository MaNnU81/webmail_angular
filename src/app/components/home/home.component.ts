import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { NavbarComponent } from "../navbar/navbar.component";

import { MailViewComponent } from "../mail-view/mail-view.component";

@Component({
  selector: 'app-home',
  imports: [HeaderComponent, NavbarComponent,  MailViewComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  
  
})
export class HomeComponent {

}

import { Component } from '@angular/core';
import { SearchModuleComponent } from "../search-module/search-module.component";

@Component({
  selector: 'app-navbar',
  imports: [SearchModuleComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

}

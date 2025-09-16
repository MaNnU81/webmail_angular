import { Component, inject } from '@angular/core';
import { SearchModuleComponent } from "../search-module/search-module.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar-actions',
  imports: [SearchModuleComponent, ],
  templateUrl: './navbar-actions.component.html',
  styleUrl: './navbar-actions.component.scss'
})
export class NavbarActionsComponent {
router = inject(Router);
}

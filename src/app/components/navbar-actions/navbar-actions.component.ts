import { Component, inject } from '@angular/core';
import { SearchModuleComponent } from "../search-module/search-module.component";
import { NgIf, AsyncPipe } from '@angular/common';
import { ViewportService } from '../../services/viewport.service';

@Component({
  selector: 'app-navbar-actions',
  imports: [SearchModuleComponent, NgIf, AsyncPipe],
  templateUrl: './navbar-actions.component.html',
  styleUrl: './navbar-actions.component.scss'
})
export class NavbarActionsComponent {
  vp = inject(ViewportService);
  toggleSearch() { this.vp.toggleSearch(); }
}

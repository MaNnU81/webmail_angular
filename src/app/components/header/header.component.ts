import { Component, inject, ViewEncapsulation } from '@angular/core';
import { HeaderTitleComponent } from "../header-title/header-title.component";
import { SearchModuleComponent } from "../search-module/search-module.component";
import { HeaderAccountComponent } from "../header-account/header-account.component";
import { ViewportService } from '../../services/viewport.service';
import { NgIf, AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [AsyncPipe, NgIf, HeaderTitleComponent, SearchModuleComponent, HeaderAccountComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent {
constructor(public vp: ViewportService) {}
}

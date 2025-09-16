import { Component, inject, ViewEncapsulation } from '@angular/core';
import { TitleComponent } from "../title/title.component";
import { SearchModuleComponent } from "../search-module/search-module.component";
import { AccountDisplayComponent } from "../account-display/account-display.component";
import { ViewportService } from '../../services/viewport.service';
import { NgIf, AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [AsyncPipe, NgIf, TitleComponent, SearchModuleComponent, AccountDisplayComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent {
constructor(public vp: ViewportService) {}
}

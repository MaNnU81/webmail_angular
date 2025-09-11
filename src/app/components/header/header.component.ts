import { Component, ViewEncapsulation } from '@angular/core';
import { TitleComponent } from "../title/title.component";
import { SearchModuleComponent } from "../search-module/search-module.component";
import { AccountDisplayComponent } from "../account-display/account-display.component";

@Component({
  selector: 'app-header',
  imports: [TitleComponent, SearchModuleComponent, AccountDisplayComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent {

}

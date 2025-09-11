import { Component } from '@angular/core';
import { TitleComponent } from "../title/title.component";

@Component({
  selector: 'app-header',
  imports: [TitleComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}

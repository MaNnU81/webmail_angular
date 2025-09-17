import { Component, inject } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { ViewportService } from '../../services/viewport.service';
import { NgIf, AsyncPipe } from '@angular/common';


@Component({
  selector: 'app-new-mail',
  imports: [NgIf, AsyncPipe, HeaderComponent],
  templateUrl: './new-mail.component.html',
  styleUrl: './new-mail.component.scss'
})
export class NewMailComponent {
vp = inject(ViewportService);
}

import { Component, Input } from '@angular/core';
import { Mockmail } from '../../model/mockmail';
import { NgIf } from '@angular/common';
import { DatePipe } from '@angular/common';
import { MailLabelSelectorComponent } from "../mail-label-selector/mail-label-selector.component";
import { MailLabelprovaComponent } from "../mail-labelprova/mail-labelprova.component";


@Component({
  selector: 'app-mail-detail',
  imports: [NgIf, DatePipe, MailLabelSelectorComponent, MailLabelprovaComponent],
  templateUrl: './mail-detail.component.html',
  styleUrl: './mail-detail.component.scss'
})
export class MailDetailComponent {
 @Input() mail: Mockmail | null = null;

}



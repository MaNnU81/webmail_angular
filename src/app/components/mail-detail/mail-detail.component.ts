import { Component, Input } from '@angular/core';
import { Mockmail } from '../../model/mockmail';
import { NgIf } from '@angular/common';
import { DatePipe } from '@angular/common';
import { MailLabelPickerComponent } from "../mail-label-picker/mail-label-picker.component";

@Component({
  selector: 'app-mail-detail',
  imports: [NgIf, DatePipe, MailLabelPickerComponent],
  templateUrl: './mail-detail.component.html',
  styleUrl: './mail-detail.component.scss'
})
export class MailDetailComponent {
 @Input() mail: Mockmail | null = null;

}



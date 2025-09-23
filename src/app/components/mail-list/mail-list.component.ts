import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Mockmail } from '../../model/mockmail';
import { CommonModule, NgClass } from '@angular/common';
import { MailCardComponent } from '../mail-card/mail-card.component';



@Component({
  selector: 'app-mail-list',
  imports: [NgClass, CommonModule, MailCardComponent],
  templateUrl: './mail-list.component.html',
  styleUrl: './mail-list.component.scss',
  
})
export class MailListComponent {
  @Input({ required: true }) mails: Mockmail[] = [];
  trackByIndex = (i: number) => i;

@Input() selectedMail: Mockmail | null = null;

  //outup onselected 

 @Output() mailSelected = new  EventEmitter<any>();

 onMailClick(mail: Mockmail) {
  this.mailSelected.emit(mail);
 }
}

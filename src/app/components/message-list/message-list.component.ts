import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Mockmail } from '../../model/mockmail';
import { CommonModule } from '@angular/common';
import { CardMessageComponent } from '../card-message/card-message.component';

@Component({
  selector: 'app-message-list',
  imports: [CommonModule, CardMessageComponent],
  templateUrl: './message-list.component.html',
  styleUrl: './message-list.component.scss',
  
})
export class MessageListComponent {
  @Input({ required: true }) mails: Mockmail[] = [];
  trackByIndex = (i: number) => i;

  @Input() selectedMail: Mockmail | null = null;

  //outup onselected 

 @Output() mailSelected = new  EventEmitter<any>();

 onMailClick(mail:any) {
  this.mailSelected.emit(mail);
 }


}

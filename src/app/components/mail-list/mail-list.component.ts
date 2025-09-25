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
  trackById = (_: number, m: Mockmail) => m.id;

@Input() selectedMail: Mockmail | null = null;

  //outup onselected 

 @Output() mailSelected = new  EventEmitter<Mockmail>();
 @Output() starToggled = new EventEmitter<Mockmail>();

 onMailClick(mail: Mockmail) {
  this.mailSelected.emit(mail);
 }

 onStarToggled(mail: Mockmail) {
  this.starToggled.emit(mail);
 }
}

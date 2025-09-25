import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Mockmail } from '../../model/mockmail';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mail-card',
  imports: [CommonModule],
  templateUrl: './mail-card.component.html',
  styleUrl: './mail-card.component.scss'
})
export class MailCardComponent {
  @Input() mail!: Mockmail;
  @Input() isSelected: boolean = false;

  @Output() starToggled = new EventEmitter<Mockmail>();


  onStarClick(e: MouseEvent) {
    e.stopPropagation();
    this.starToggled.emit(this.mail);
  }


}

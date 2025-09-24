import { Component, Input } from '@angular/core';
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
  
  
}

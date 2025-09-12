import { Component, Input } from '@angular/core';
import { Mockmail } from '../../model/mockmail';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card-message',
  imports: [CommonModule],
  templateUrl: './card-message.component.html',
  styleUrl: './card-message.component.scss'
})
export class CardMessageComponent {
 @Input() item!: Mockmail;
}

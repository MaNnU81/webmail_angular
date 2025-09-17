import { Component, Input } from '@angular/core';
import { Mockmail } from '../../model/mockmail';
import { NgIf } from '@angular/common';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-message-viewer',
  imports: [NgIf, DatePipe],
  templateUrl: './message-viewer.component.html',
  styleUrl: './message-viewer.component.scss'
})
export class MessageViewerComponent {
 @Input() mail: Mockmail | null = null;

}



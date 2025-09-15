import { Component, Input } from '@angular/core';
import { Mockmail } from '../../model/mockmail';
import { NgIf } from '@angular/common';


@Component({
  selector: 'app-message-viewer',
  imports: [NgIf],
  templateUrl: './message-viewer.component.html',
  styleUrl: './message-viewer.component.scss'
})
export class MessageViewerComponent {
 @Input() mail: Mockmail | null = null;

  formatDate(dateString: string): string {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('it-IT', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }).format(date);
  }


   // Metodo per estrarre email da mittente (se presente nel formato "Nome <email>")
  extractEmail(mittente: string): string {
    const match = mittente.match(/<([^>]+)>/);
    return match ? match[1] : mittente;
  }

  // Metodo per estrarre nome da mittente (se presente nel formato "Nome <email>")
  extractName(mittente: string): string {
    const match = mittente.match(/([^<]+)\s*</);
    return match ? match[1].trim() : mittente;
  }
}



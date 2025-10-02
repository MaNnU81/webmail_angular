import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Mockmail } from '../../model/mockmail';
import { NgIf } from '@angular/common';
import { DatePipe } from '@angular/common';
import { MailLabelprovaComponent } from "../mail-labelprova/mail-labelprova.component";
import { Observable } from 'rxjs';
import { MailLabel } from '../../model/mail-label';


@Component({
  selector: 'app-mail-detail',
  imports: [NgIf, DatePipe, MailLabelprovaComponent],
  templateUrl: './mail-detail.component.html',
  styleUrl: './mail-detail.component.scss'
})
export class MailDetailComponent {
 @Input() mail: Mockmail | null = null;
 @Input() labels$!: Observable<MailLabel[]>;
 @Output() labelsChange = new EventEmitter<{ mailId: string; next: string[] }>();


 get mailLabelIds(): string[] {
  const raw = this.mail?.labels ?? [];
  return raw.map((x: any) => typeof x === 'string' ? x : x.id);
}

onSelectorChange(nextIds: string[]) {
  if (!this.mail) return;
  this.labelsChange.emit({ mailId: this.mail.id, next: nextIds });
}

}



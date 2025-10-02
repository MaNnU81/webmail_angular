import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgIf, NgFor, AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs';
import { LabelKey, MailLabel, toLabelKey } from '../../model/mail-label';

@Component({
  selector: 'app-navbar-label-picker',
  imports: [NgIf, NgFor, AsyncPipe],
  templateUrl: './navbar-label-picker.component.html',
  styleUrl: './navbar-label-picker.component.scss'
})
export class NavbarLabelPickerComponent {
  
  @Input() labels$!: Observable<MailLabel[]>;
  @Input() activeKey: string | null = null; 
  @Output() labelSelected = new EventEmitter<string>()



  onItemClick(l: MailLabel) {
    this.labelSelected.emit(toLabelKey(l.id));
  }
    trackById = (_: number, l: MailLabel) => l.id;
}



  


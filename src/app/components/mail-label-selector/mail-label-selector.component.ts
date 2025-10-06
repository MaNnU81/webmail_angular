import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable, map, tap } from 'rxjs';
import { MailLabel } from '../../model/mail-label';

export interface Option { value: any; label: string; disabled?: boolean }




@Component({
  selector: 'app-mail-label-selector',
  imports: [CommonModule ],
  templateUrl: './mail-label-selector.component.html',
  styleUrl: './mail-label-selector.component.scss'
})
export class MailLabelSelectorComponent {
 @Input() value: any[] = [];
  @Output() valueChange = new EventEmitter<any[]>();
  
  
  options$!: Observable<Option[]>;

  // Alias per poter bindare come [labels$]="labels$"  mica l'ho capito (setter??)
  @Input('labels$') 
  set labelsStream$(src: Observable<MailLabel[]> | undefined) {
    if (!src) return;
    this.options$ = src.pipe(
      map(labels => (labels ?? []).map(l => ({
        value: 'lbl_' + l.id,
        label: l.name,
        disabled: false
      })))
    );
  }

  open = false;

  toggleOpen() { this.open = !this.open; }
  isSelected(o: Option) { return this.value?.includes(o.value); }

  toggle(o: Option) {
    if (o.disabled) return;
    const next = this.value ? [...this.value] : [];
    const i = next.indexOf(o.value);
    if (i > -1) next.splice(i, 1); else next.push(o.value);
    this.value = next;
    this.valueChange.emit(this.value);
  }

  remove(o: Option) {
    const next = (this.value || []).filter(v => v !== o.value);
    this.value = next;
    this.valueChange.emit(this.value);
  }

  getSelectedOptions(opts: Option[]): Option[] {
    const set = new Set(this.value);
    return opts.filter(o => set.has(o.value));
  }
}

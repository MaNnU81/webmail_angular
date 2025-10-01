import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';


export interface Option { value: any; label: string; disabled?: boolean }
@Component({
  selector: 'app-mail-labelprova',
  imports: [CommonModule],
  templateUrl: './mail-labelprova.component.html',
  styleUrl: './mail-labelprova.component.scss'
})
export class MailLabelprovaComponent {
@Input() options: Option[] = arraycose;
@Input() value: any[] = [];
@Output() valueChange = new EventEmitter<any[]>();


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


get selectedOptions(): Option[] {
const set = new Set(this.value);
return this.options.filter(o => set.has(o.value));
}
}


const arraycose = [{value: "ok", label: "casa"},
{value: "1", label: "Documenti auto"},
{value: "2", label: "BP Pagati", disabled: true },
{value: "3", label: "Università", disabled: false},
{value: "4", label: "Condominio"}]
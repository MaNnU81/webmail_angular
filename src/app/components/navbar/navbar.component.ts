import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { NavbarActionsComponent } from "../navbar-actions/navbar-actions.component";
import { ViewportService } from '../../services/viewport.service';
import { NgIf, AsyncPipe, NgFor } from '@angular/common';
import { MailFolder } from '../../model/mockmail';
import { NavbarLabelPickerComponent } from "../navbar-label-picker/navbar-label-picker.component";
import { catchError, Observable, of, startWith, Subject, switchMap, tap } from 'rxjs';
import { LabelKey, MailLabel } from '../../model/mail-label';

@Component({
  selector: 'app-navbar',
  imports: [AsyncPipe, NgIf, NgFor, NavbarActionsComponent, NavbarLabelPickerComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})

export class NavbarComponent {
  @Input() activeLabelKey: string | null = null;
  @Input() labels$!: Observable<MailLabel[]>;
  @Output() labelCreateRequested = new EventEmitter<string>();
  @Output() folderChanged = new EventEmitter<MailFolder>();
  @Output() folderSelected = new EventEmitter<MailFolder>();
  @Output() labelSelected  = new EventEmitter<string>();

  

  

 

  onSelectChange(event: Event) {
  const raw = (event.target as HTMLSelectElement).value;
  if (!raw) return;

  const [kind, payload] = raw.split(':', 2);

  if (kind === 'folder') {
    this.folderSelected.emit(payload as MailFolder);
  } else if (kind === 'label') {
    this.labelSelected.emit(payload); // 'starred' (o altre label custom in futuro)
  } else {
    console.warn('Valore select non riconosciuto:', raw);
  }
}

 //searchmodule
  viewportServ = inject(ViewportService);
  // mailDataServ = inject(MailDataService)
  toggleSearch() { this.viewportServ.toggleSearch(); }




//mailselezionata
onFolderSelect(event: any) {
    const selectedValue = event.target.value as MailFolder;
    if (selectedValue) {
      // Naviga alla cartella selezionata
      console.log('Cartella selezionata by rullo:', selectedValue);
      this.folderSelected.emit(selectedValue);
    }
  }

 onFolderClick(folder: MailFolder) {
    console.log('Cartella selezionata by list:', folder);
    this.folderSelected.emit(folder);
  }

  onLabelClick(label: string) {
    this.labelSelected.emit(label);
  }

  onLabelKeySelected(key: string) {
    this.labelSelected.emit(key); // passa 'lbl_<id>' verso il container
  }

   onStarredClick() {
    this.labelSelected.emit('starred');
  }
  
}

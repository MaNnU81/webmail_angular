import { Component, EventEmitter, inject, Output } from '@angular/core';
import { NavbarActionsComponent } from "../navbar-actions/navbar-actions.component";
import { ViewportService } from '../../services/viewport.service';
import { NgIf, AsyncPipe } from '@angular/common';
import { MailFolder } from '../../model/mockmail';

@Component({
  selector: 'app-navbar',

  imports: [AsyncPipe, NgIf, NavbarActionsComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})

export class NavbarComponent {
  
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
  
}

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
 //searchmodule
  viewportServ = inject(ViewportService);
  toggleSearch() { this.viewportServ.toggleSearch(); }
  @Output() folderChanged = new EventEmitter<MailFolder>();
  @Output() folderSelected = new EventEmitter<MailFolder>();

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
}

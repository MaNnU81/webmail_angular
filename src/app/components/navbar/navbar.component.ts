import { Component } from '@angular/core';
import { NavbarActionsComponent } from "../navbar-actions/navbar-actions.component";

@Component({
  selector: 'app-navbar',
  imports: [ NavbarActionsComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})

export class NavbarComponent {
onFolderSelect(event: any) {
    const selectedValue = event.target.value;
    if (selectedValue) {
      // Naviga alla cartella selezionata
      console.log('Cartella selezionata:', selectedValue);
      // this.router.navigate(['/mail', selectedValue]);
    }
}
}

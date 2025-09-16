import { Component, inject } from '@angular/core';
import { NavbarActionsComponent } from "../navbar-actions/navbar-actions.component";
import { ViewportService } from '../../services/viewport.service';

@Component({
  selector: 'app-navbar',
  imports: [ NavbarActionsComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})

export class NavbarComponent {
 //searchmodule
  vp = inject(ViewportService);
  toggleSearch() { this.vp.toggleSearch(); }


//mailselezionata
onFolderSelect(event: any) {
    const selectedValue = event.target.value;
    if (selectedValue) {
      // Naviga alla cartella selezionata
      console.log('Cartella selezionata:', selectedValue);
      // this.router.navigate(['/mail', selectedValue]);
    }
}
}

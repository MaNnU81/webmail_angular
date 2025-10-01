import { Component, EventEmitter, inject, Output } from '@angular/core';
import { SearchModuleComponent } from "../search-module/search-module.component";
import { NgIf, AsyncPipe } from '@angular/common';
import { ViewportService } from '../../services/viewport.service';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-navbar-actions',
  imports: [SearchModuleComponent, NgIf, AsyncPipe, FormsModule],
  templateUrl: './navbar-actions.component.html',
  styleUrl: './navbar-actions.component.scss'
})
export class NavbarActionsComponent {
  viewportServ = inject(ViewportService);

  @Output() labelCreateRequested = new EventEmitter<string>();
  pending = false;
  name = '';

addLabelOpen$ = this.viewportServ.addLabelOpen$;
searchOpen$ = this.viewportServ.searchOpen$;

  toggleSearch() { this.viewportServ.toggleSearch(); }
  toggleAddLabel() { this.viewportServ.toggleAddLabel(); }

submitNewLabel() {
  const trimmed = this.name.trim();
  if (!trimmed) return;

  
  this.labelCreateRequested.emit(trimmed);
  this.name = '';
  this.viewportServ.closeAddLabel();
}

}

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
  toggleSearch() { this.viewportServ.toggleSearch(); }




  @Output() labelCreateRequested = new EventEmitter<string>();
  addOpen = false;
  pending = false;
  name = '';

  toggleAdd() {
    if (this.pending)return;
  this.addOpen = !this.addOpen;
  if (!this.addOpen) this.name = ''; 
  }

  submit() {
    const trimmed = this.name.trim();
    if (!trimmed || this.pending)return;
    this.pending = true;
    this.labelCreateRequested.emit(trimmed);
  }

  reset(done = false) {
this.pending = false;
if(done) {this.addOpen = false; this.name = ''; }
  }  

}

import { Component, Input } from '@angular/core';

import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-search-module',
  imports: [CommonModule, ],
  templateUrl: './search-module.component.html',
  styleUrl: './search-module.component.scss'
})
export class SearchModuleComponent {
  @Input() context: 'header' | 'navbar' = 'header';
  isExpanded: boolean = false; // Per futura espansione mobile
}

import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-account-display',
  imports: [RouterLink],
  templateUrl: './header-account.component.html',
  styleUrl: './header-account.component.scss'
})
export class HeaderAccountComponent {
router = inject(Router);
}

import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-account-display',
  imports: [RouterLink],
  templateUrl: './account-display.component.html',
  styleUrl: './account-display.component.scss'
})
export class AccountDisplayComponent {
router = inject(Router);
}

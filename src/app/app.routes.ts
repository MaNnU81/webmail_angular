import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

import { SettingsComponent } from './components/settings/settings.component';
import { NewMailComponent } from './components/new-mail/new-mail.component';

export const routes: Routes = [
 { path: '', redirectTo: 'home', pathMatch: 'full' }, 
  { path: 'home', component: HomeComponent },         
  { path: 'settings', component: SettingsComponent },    
  { path: 'newmail', component: NewMailComponent },    
  { path: '**', redirectTo: 'home' }                   

];

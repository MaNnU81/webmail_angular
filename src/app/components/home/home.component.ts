import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { NavbarComponent } from "../navbar/navbar.component";
import { MessageListComponent } from "../message-list/message-list.component";
import { MessageViewerComponent } from "../message-viewer/message-viewer.component";

@Component({
  selector: 'app-home',
  imports: [HeaderComponent, NavbarComponent, MessageListComponent, MessageViewerComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  
  
})
export class HomeComponent {

}

import { Component } from '@angular/core';
import { MessageListComponent } from "../message-list/message-list.component";
import { MessageViewerComponent } from "../message-viewer/message-viewer.component";
import { Mockmail } from '../../model/mockmail';
import { MOCK_MAILS } from '../../mocks/mockmail';

@Component({
  selector: 'app-mail-view',
  imports: [MessageListComponent, MessageViewerComponent],
  templateUrl: './mail-view.component.html',
  styleUrl: './mail-view.component.scss'
})
export class MailViewComponent {
readonly mails: Mockmail[] = MOCK_MAILS;
}

import { Component, inject, OnInit } from '@angular/core';
import { MailListComponent } from "../mail-list/mail-list.component";
import { MailDetailComponent } from "../mail-detail/mail-detail.component";
import { Mockmail } from '../../model/mockmail';
import { NgIf } from '@angular/common';
import { MailDataService } from '../../services/mail-data.service';

@Component({
  selector: 'app-mail-view',
  imports: [NgIf, MailListComponent, MailDetailComponent],
  templateUrl: './mail-view.component.html',
  styleUrl: './mail-view.component.scss'
})
export class MailViewComponent implements OnInit {

  // readonly mails: Mockmail[] = MOCK_MAILS;


  // ////gestione selectedMail
  // selectedMail: Mockmail | null = null;

  // ngOnInit() {
  //     // Seleziona automaticamente la prima mail all'inizio
  //     if (this.mails.length > 0) {
  //       this.selectedMail = this.mails[0];
  //       console.log(this.selectedMail);

  //     }
  //   }


  private api = inject(MailDataService);

  mails: Mockmail[] = [];
  selectedMail: Mockmail | null = null;
  loading = false;
  error: string | null = null;

  ngOnInit(): void {
    this.loading = true;
    this.api.getMails$().subscribe({
      next: m => { this.mails = m; this.loading = false; },
      error: e => { this.error = 'Errore nel caricamento'; this.loading = false; console.error(e); }
    });
  }


  onMailSelected(mail: Mockmail) {
    this.selectedMail = mail;
    // console.log(this.selectedMail);
    if (!mail.isRead) {
      // crea una NUOVA array per triggerare change detection (utile con OnPush)
      this.mails = this.mails.map(m =>
        m.id === mail.id ? { ...m, isRead: true } : m
      );
    }
  }


}



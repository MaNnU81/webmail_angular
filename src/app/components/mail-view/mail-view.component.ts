import { Component, inject,  } from '@angular/core';
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
export class MailViewComponent  {



  private api = inject(MailDataService);

  mails: Mockmail[] = [];
  selectedMail: Mockmail | null = null;
  loading = false;
  error: string | null = null;

  // paginator
  pageIndex = 0;         
  pageSize  = 10;         
  total     = 0;         

    constructor(private mailSvc: MailDataService) {
    this.loadPage(this.pageIndex, this.pageSize);
    this.refreshTotal(); // modo semplice per avere 'total' su MockAPI
  }

  loadPage(pageIndex: number, pageSize: number): void {
    const page = pageIndex + 1; // MockAPI è 1-based
    this.mailSvc.getMails$({
      page, limit: pageSize,
      folder: 'inbox',
      sortBy: 'createdAt',
      order: 'desc'
    }).subscribe(list => this.mails = list);
  }

  prev() {
  if (this.pageIndex > 0) {
    this.pageIndex--;
    this.loadPage(this.pageIndex, this.pageSize);
  }
}
next() {
  if ((this.pageIndex + 1) * this.pageSize < this.total) {
    this.pageIndex++;
    this.loadPage(this.pageIndex, this.pageSize);
  }
}

  onMailSelected(mail: Mockmail) {
    this.selectedMail = mail;
  }

  private refreshTotal(): void {
    // MockAPI non restituisce sempre il totale: prendo "un sacco" di elementi e conto
    this.mailSvc.getMails$({ folder: 'inbox', page: 1, limit: 1000 })
      .subscribe(all => this.total = all.length);
  }



  get showingFrom(): number {
  return this.total === 0 ? 0 : this.pageIndex * this.pageSize + 1;
}
get showingTo(): number {
  // usa la lunghezza reale della pagina corrente
  const end = this.pageIndex * this.pageSize + (this.mails?.length ?? 0);
  return Math.min(this.total, end);
}
get showingCount(): number {
  return this.mails?.length ?? 0;
}
}



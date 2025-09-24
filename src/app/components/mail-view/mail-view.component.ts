import { Component, inject, } from '@angular/core';
import { MailListComponent } from "../mail-list/mail-list.component";
import { MailDetailComponent } from "../mail-detail/mail-detail.component";
import { MailFolder, Mockmail } from '../../model/mockmail';
import { NgIf, AsyncPipe } from '@angular/common';
import { MailDataService } from '../../services/mail-data.service';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject, catchError, combineLatest, map, of, switchMap, tap } from 'rxjs';


@Component({
  selector: 'app-mail-view',
  imports: [NgIf, AsyncPipe, MailListComponent, MailDetailComponent],
  templateUrl: './mail-view.component.html',
  styleUrl: './mail-view.component.scss'
})
export class MailViewComponent {
  mails: Mockmail[] = [];
  selectedMail: Mockmail | null = null;
  loading = false;
  error: string | null = null;
  private route = inject(ActivatedRoute);

  // paginator
  pageIndex = 0;
  pageSize = 10;
  total = 0;
  constructor(private mailDataServ: MailDataService) { }


  //  Observable che emette ogni volta che cambiano folder/pagina
  private folder$ = new BehaviorSubject<MailFolder>('inbox');
 private folderParams$ = this.route.params.pipe(
    map(params => params['folder'] as MailFolder || 'inbox'),
   tap(folder => {
    this.pageIndex = 0;
    this.refreshTotal(folder); 
    this.pageParams$.next({ pageIndex: 0, pageSize: this.pageSize });
  })
  );
  private pageParams$ = new BehaviorSubject<{ pageIndex: number, pageSize: number }>({
    pageIndex: 0,
    pageSize: 10
  });

  changeFolder(folder: MailFolder) {
    console.log('Changing folder to:', folder);
    this.pageIndex = 0;
    this.refreshTotal(folder);
    this.folder$.next(folder);
    this.pageParams$.next({ 
      pageIndex: 0, 
      pageSize: this.pageSize 
    });
  }

  mails$ = combineLatest([this.folder$, this.pageParams$]).pipe(
    switchMap(([folder, { pageIndex, pageSize }]) => {
      this.loading = true;
      return this.mailDataServ.getMails$({
        page: pageIndex + 1,
        limit: pageSize,
        folder
      }).pipe(
        tap(mails => {
          this.loading = false;
          this.mails = mails; // Aggiorna l'array mails


          // GESTIONE SELECTEDMAIL:
          if (mails.length > 0) {
            // Se non c'è selectedMail o la mail selezionata non è nella nuova lista
            if (!this.selectedMail || !mails.find(m => m.id === this.selectedMail!.id)) {
              this.selectedMail = mails[0]; // Seleziona la prima
            }
          } else {
            this.selectedMail = null; // Nessuna mail
          }
        }),
        catchError(error => {
          this.loading = false;
          this.error = 'Errore nel caricamento';
          return of([]);
        })
      );
    })
  );

  prev() {
    if (this.pageIndex > 0) {
      this.pageIndex--;
      this.pageParams$.next({
        pageIndex: this.pageIndex,
        pageSize: this.pageSize
      });
    }
  }
  next() {
  const currentFolder = this.route.snapshot.params['folder'] || 'inbox';
  if (this.showingTo < this.total) {
    this.pageIndex++;
    this.pageParams$.next({
      pageIndex: this.pageIndex,
      pageSize: this.pageSize
    });
    // Aggiorna total se necessario
    this.refreshTotal(currentFolder);
  }
}

  onMailSelected(mail: Mockmail) {
    if (!mail.isRead) {
      const updatedMail = { ...mail, isRead: true };
      this.selectedMail = updatedMail;
      this.mails = this.mails.map(m =>
        m.id === mail.id ? updatedMail : m
      );
    } else {
      // Se la mail è GIÀ letta, usa semplicemente l'oggetto originale
      this.selectedMail = mail;
    }
  };

public refreshTotal(folder: MailFolder): void {
  this.mailDataServ.getMails$({ folder, page: 1, limit: 500 }) // ✅ Folder corrente!
    .subscribe(allMails => {
      this.total = allMails.length;
      console.log(`Total mail in ${folder}:`, this.total); // Debug
    });
}




  ///getter per pagination
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



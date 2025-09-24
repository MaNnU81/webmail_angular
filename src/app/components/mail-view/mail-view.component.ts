import { Component, inject, OnInit, } from '@angular/core';
import { MailListComponent } from "../mail-list/mail-list.component";
import { MailDetailComponent } from "../mail-detail/mail-detail.component";
import { MailFolder, Mockmail } from '../../model/mockmail';
import { NgIf, AsyncPipe } from '@angular/common';
import { MailDataService } from '../../services/mail-data.service';
import { BehaviorSubject, catchError, combineLatest, firstValueFrom, map, of, scan, startWith, Subject, switchMap, tap } from 'rxjs';


@Component({
  selector: 'app-mail-view',
  imports: [NgIf, AsyncPipe, MailListComponent, MailDetailComponent],
  templateUrl: './mail-view.component.html',
  styleUrl: './mail-view.component.scss'
})
export class MailViewComponent implements OnInit{
  mails: Mockmail[] = [];
  selectedMail: Mockmail | null = null;
  loading = false;
  error: string | null = null;
  selectedMailId: string | null = null;

  // paginator
  pageIndex = 0;
  pageSize = 10;
  total = 0;


  ngOnInit(): void {
    // inizializza il totale per la folder iniziale
    this.refreshTotal(this.folder$.value);
  }

  constructor(private mailDataServ: MailDataService) { }

  // ---- STATE: folder + pagina (solo local subjects)
  private folder$ = new BehaviorSubject<MailFolder>('inbox');
  private pageParams$ = new BehaviorSubject<{ pageIndex: number; pageSize: number }>({
    pageIndex: 0,
    pageSize: 10
  });

  // ---- PATCH REATTIVE: read/unread (id è string)
  private readPatch$ = new Subject<{ id: string; changes: Partial<Mockmail> }>();
  private readState$ = this.readPatch$.pipe(
    scan(
      (
        acc: Record<string, Partial<Mockmail>>,
        p: { id: string; changes: Partial<Mockmail> }
      ) => ({
        ...acc,
        [p.id]: { ...(acc[p.id] ?? {}), ...p.changes }
      }),
      {} as Record<string, Partial<Mockmail>>
    ),
    startWith({} as Record<string, Partial<Mockmail>>)
  );

  // ---- STREAM DATI BASE
  private baseMails$ = combineLatest([this.folder$, this.pageParams$]).pipe(
    switchMap(([folder, { pageIndex, pageSize }]) => {
      this.loading = true;
      return this.mailDataServ
        .getMails$({ page: pageIndex + 1, limit: pageSize, folder })
        .pipe(
          tap(() => {
            this.loading = false;
            this.error = null;
          }),
          catchError(() => {
            this.loading = false;
            this.error = 'Errore nel caricamento';
            return of<Mockmail[]>([]);
          })
        );
    })
  );

  // ---- VIEW STREAM: applica patch prima del render, mantieni cache per i getter
  mails$ = combineLatest([this.baseMails$, this.readState$]).pipe(
    map(([mails, state]) => mails.map(m => (state[m.id] ? { ...m, ...state[m.id] } : m))),
    tap(mails => {
      this.mails = mails;

      if (mails.length === 0) {
        this.selectedMail = null;
        return;
      }

      
      if (this.selectedMailId) {
        this.selectedMail = mails.find(m => m.id === this.selectedMailId) ?? mails[0];
        return;
      }

      
      if (!this.selectedMail || !mails.some(m => m.id === this.selectedMail!.id)) {
        this.selectedMail = mails[0];
      }
    })
  );

  // ---- HANDLERS
  changeFolder(folder: MailFolder) {
    this.pageIndex = 0;
    this.folder$.next(folder);
    this.pageParams$.next({ pageIndex: 0, pageSize: this.pageSize });
    this.refreshTotal(folder);
  }

  prev() {
    if (this.pageIndex > 0) {
      this.pageIndex--;
      this.pageParams$.next({ pageIndex: this.pageIndex, pageSize: this.pageSize });
    }
  }

  next() {
    if (this.showingTo < this.total) {
      this.pageIndex++;
      this.pageParams$.next({ pageIndex: this.pageIndex, pageSize: this.pageSize });
      
    }
  }

  onMailSelected(mail: Mockmail) {
    this.selectedMailId = mail.id;
    this.selectedMail = this.mails.find(m => m.id === mail.id) ?? mail;
    if (!mail.isRead) {
      this.readPatch$.next({ id: mail.id, changes: { isRead: true } });
    }
  }

  // ---- TOTAL con firstValueFrom
  public async refreshTotal(folder: MailFolder): Promise<void> {
    const allMails = await firstValueFrom(
      this.mailDataServ.getMails$({ folder, page: 1, limit: 500 })
    );
    this.total = allMails.length;
    console.log(`Total mail in ${folder}:`, this.total);
  }

  // ---- GETTER per pagination
  get showingFrom(): number {
    return this.total === 0 ? 0 : this.pageIndex * this.pageSize + 1;
  }
  get showingTo(): number {
    const end = this.pageIndex * this.pageSize + (this.mails?.length ?? 0);
    return Math.min(this.total, end);
  }
  get showingCount(): number {
    return this.mails?.length ?? 0;
  }
}
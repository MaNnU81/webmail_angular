import { Component, inject, OnInit, } from '@angular/core';
import { MailListComponent } from "../mail-list/mail-list.component";
import { MailDetailComponent } from "../mail-detail/mail-detail.component";
import { MailFolder, Mockmail } from '../../model/mockmail';
import { NgIf, AsyncPipe } from '@angular/common';
import { MailDataService } from '../../services/mail-data.service';
import { BehaviorSubject, catchError, combineLatest, firstValueFrom, map, of, scan, startWith, Subject, switchMap, tap } from 'rxjs';

type ViewMode =
  | { kind: 'folder'; value: MailFolder }
  | { kind: 'label';  value: string };


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


  private mode$ = new BehaviorSubject<ViewMode>({ kind: 'folder', value: 'inbox' });
  // ---- folder + dati pagina (f5 resetta)
  private folder$ = new BehaviorSubject<MailFolder>('inbox');
  private pageParams$ = new BehaviorSubject<{ pageIndex: number; pageSize: number }>({
    pageIndex: 0,
    pageSize: 10
  });

  // ---- PATCH REATTIVE: read/unread 
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
  private baseMails$ = combineLatest([this.mode$, this.pageParams$]).pipe(
    switchMap(([mode, { pageIndex, pageSize }]) => {
      this.loading = true;

      const params =
        mode.kind === 'folder'
          ? { page: pageIndex + 1, limit: pageSize, folder: mode.value as MailFolder }
          : { page: pageIndex + 1, limit: pageSize, labels: mode.value as string };

      return this.mailDataServ.getMails$(params as any).pipe(
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
  mails$ = combineLatest([this.baseMails$, this.readState$, this.mode$]).pipe(
  
  map(([mails, state, mode]) => {
    const patched = mails.map(m => (state[m.id] ? { ...m, ...state[m.id] } : m));
    
    if (mode.kind === 'label') {
      return patched.filter(m => (m.labels ?? []).includes(mode.value));
    }
    // altrimenti (folder) restituisci tutto
    return patched;
  }),
  // 3) gestione selezione (identica alla tua)
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
    this.selectedMailId = null;
    this.folder$.next(folder);
    this.mode$.next({ kind: 'folder', value: folder });
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

 onStarToggled(mail: Mockmail) {
  const current = mail.labels ?? [];
  const hasStar = current.includes('starred');
  const nextLabels = hasStar
    ? current.filter(l => l !== 'starred')
    : [...current, 'starred'];


  this.readPatch$.next({ id: mail.id, changes: { labels: nextLabels } });


  this.mailDataServ.updateMailLabels$(mail.id, nextLabels).pipe(
    catchError(() => {
      this.readPatch$.next({ id: mail.id, changes: { labels: current } });
      this.error = 'Impossibile aggiornare la stella. Riprova.';
      return of(null);
    }),
    tap(res => {
      if (!res) return;
      const mode = this.mode$.value;
      if (mode.kind === 'label') {
        this.refreshTotalByLabel(mode.value);
      } else {
        this.refreshTotal(this.folder$.value);
      }

    })
  ).subscribe();
}

onLabelSelected(label: string) {
  this.pageIndex = 0;
    this.selectedMailId = null;
    this.mode$.next({ kind: 'label', value: label });
    this.pageParams$.next({ pageIndex: 0, pageSize: this.pageSize });
    this.refreshTotalByLabel(label);
}

  // ---- TOTAL con firstValueFrom
  public async refreshTotal(folder: MailFolder): Promise<void> {
    const allMails = await firstValueFrom(
      this.mailDataServ.getMails$({ folder, page: 1, limit: 500 })
    );
    this.total = allMails.length;
    console.log(`Total mail in ${folder}:`, this.total);
  }

  private async refreshTotalByLabel(label: string): Promise<void> {
    const allMails = await firstValueFrom(
      this.mailDataServ.getMails$({ labels: label, page: 1, limit: 500 } as any)
    );
    this.total = allMails.length;
    console.log(`Total mail with label ${label}:`, this.total);
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
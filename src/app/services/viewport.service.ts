import { Inject, inject, Injectable } from '@angular/core';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { BehaviorSubject, combineLatest, map, shareReplay } from 'rxjs';
import { Route, Router } from '@angular/router';
import { DOCUMENT } from '@angular/common';


type SizeClass = 'mobile' | 'tablet' | 'desktop';


@Injectable({
  providedIn: 'root'
})
export class ViewportService {

 private bo = inject(BreakpointObserver);
 
  // Breakpoint principali (soglie a scelta)

  readonly isMobile$ = this.bo.observe('(max-width: 767px)')
  .pipe(map(s => s.matches), shareReplay(1))

  readonly isTablet$ = this.bo.observe('(min-width: 768px) and (max-width: 1023px)')
    .pipe(map(s => s.matches), shareReplay(1));

  readonly isDesktop$ = this.bo.observe('(min-width: 1024px)')
    .pipe(map(s => s.matches), shareReplay(1));

///combina i 3 osservabili di sopra, e fa uscire il nome della class quando risulta true (univoco)

    readonly sizeClass$ = combineLatest([this.isMobile$, this.isTablet$, this.isDesktop$])
    .pipe(map(([m,t,d]): SizeClass => m ? 'mobile' : t ? 'tablet' : 'desktop' ), shareReplay(1));

    private _searchOpen = new BehaviorSubject<boolean>(false);
    readonly searchOpen$ = this._searchOpen.asObservable();

    toggleSearch() { this._searchOpen.next(!this._searchOpen.value); }
    closeSearch() { this._searchOpen.next(false); }


    // Quando si passa a  desktop, chiude la search mobile per sicurezza
  constructor() {
    this.isDesktop$.subscribe(isDesk => { if (isDesk) this.closeSearch(); });
  }

}

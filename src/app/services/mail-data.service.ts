import { HttpClient,  HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import {  Observable } from 'rxjs';
import { Mockmail, MailFolder } from '../model/mockmail';

const SYSTEM_FOLDERS: MailFolder[]= ['inbox', 'sent', 'draft', 'trash'];


@Injectable({
  providedIn: 'root'
})
export class MailDataService {

private http = inject(HttpClient);

private apiBase = (environment.API_BASE ?? '').replace(/\/+$/, '');
private resource = environment.MAILS_RESOURCE || 'mails';


private endpoint(path: string = ''): string {
  if (!this.apiBase) {
    throw new Error('API_BASE non impostata. Avvia con: ng serve -c local');
  }return `${this.apiBase}/${this.resource}${path}`;
}

isSystemFolder(folder: MailFolder): boolean {
  return SYSTEM_FOLDERS.includes(folder as any);
}


 getMails$(opts: {
    page?: number;               
    limit?: number;               
    folder?: MailFolder; 
    labels?: string;            
  } = {}): Observable<Mockmail[]> {
    let params = new HttpParams();
    if (opts.page)   params = params.set('page', String(opts.page));
    if (opts.limit)  params = params.set('limit', String(opts.limit));
    if (opts.folder) params = params.set('folder', opts.folder);
    if (opts.labels) params = params.set('labels', opts.labels);
    return this.http.get<Mockmail[]>(this.endpoint(), { params });
  }
 
  getMail$(id: string): Observable<Mockmail> {
    return this.http.get<Mockmail>(this.endpoint(`/${id}`));
  }


   constructor() { }
}


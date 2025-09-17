import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { map, Observable } from 'rxjs';
import { Mockmail } from '../model/mockmail';

type JsonBinResponse<T> = { record: T } | T;   ////non so, jsonBin puo dare due "tipi" di risposta

@Injectable({
  providedIn: 'root'
})
export class MailDataService {

  private http = inject(HttpClient);

  private base = environment.JSONBIN_BASE;
  private binId = environment.JSONBIN_BIN_ID;
  private apiKey = environment.JSONBIN_KEY; 

  private get headers(): HttpHeaders {
    return new HttpHeaders({
      'X-Master-Key': this.apiKey,
   
      'X-Bin-Meta': 'false'
    });
  }

  getMails$(): Observable<Mockmail[]> {
    const url = `${this.base}/b/${this.binId}/latest`;
    return this.http.get<JsonBinResponse<Mockmail[]>>(url,  { headers: this.headers }).pipe(
      map((res) => (isRecordWrapper(res) ? res.record : res))
    );
  }

  constructor() { }
}

function isRecordWrapper<T>(v:any): v is { record: T } {
  return v && typeof v === 'object' && 'record' in v;
}
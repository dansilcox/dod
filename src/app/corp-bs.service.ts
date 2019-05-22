import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {YesNo} from './yes-no';
import {environment} from '../environments/environment';
import {map} from 'rxjs/operators';
import {Answer} from './answer';

@Injectable({
  providedIn: 'root'
})
export class CorpBsService {

  constructor(private _http: HttpClient) { }

  getPhrase(): Observable<string> {
    return this._http
        .get(environment.proxyUrl + environment.corpBsUrl)
        .pipe(
            map((response: any) => response.phrase || '')
        );
  }
}

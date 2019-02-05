import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {YesNo} from './yes-no';
import {environment} from '../environments/environment';
import {map} from 'rxjs/operators';
import {Answer} from './answer';

@Injectable({
  providedIn: 'root'
})
export class YesNoService {

  constructor(private _http: HttpClient) { }

  getAnswer(): Observable<YesNo> {
    return this._http
        .get(environment.proxyUrl + environment.yesNoApiUrl)
        .pipe(
            map((response: YesNo) => response)
        );
  }
}

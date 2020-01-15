import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Message, MsgResponse} from '../interfaces';
import {Observable} from 'rxjs';
import {map, tap} from 'rxjs/operators';

const URL = 'http://localhost:8080';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(
    private http: HttpClient
  ) {
  }

  send(msg: Message): Observable<MsgResponse> {
    return this.http.post<MsgResponse>(`${URL}/sendmail`, msg);
  }
}

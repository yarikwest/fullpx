import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Message, MessageResponse} from '../interfaces';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(
    private http: HttpClient
  ) {
  }

  send(msg: Message): Observable<MessageResponse> {
    return this.http.post<MessageResponse>(`${environment.apiUrl}/sendmail`, msg);
  }
}

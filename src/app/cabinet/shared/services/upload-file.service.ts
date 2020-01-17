import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {MessageResponse} from '../../../shared/interfaces';
import {environment} from '../../../../environments/environment';

@Injectable({providedIn: 'root'})
export class UploadFileService {

  constructor(
    private http: HttpClient
  ) {
  }

  postFile(file: FormData): Observable<MessageResponse> {
    return this.http.post<MessageResponse>(`${environment.apiUrl}/cabinet/upload`, file);
  }
}

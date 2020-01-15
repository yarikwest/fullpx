import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

const URL = 'http://localhost:8080';

@Injectable({providedIn: 'root'})
export class UploadFileService {

  constructor(
    private http: HttpClient
  ) {
  }

  postFile(file: FormData): Observable<any> {
    return this.http.post(`${URL}/cabinet/upload`, file);
  }
}

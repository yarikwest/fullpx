import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../interfaces';
import {map} from 'rxjs/operators';

const URL = 'http://localhost:8080';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient
  ) {
  }

  getUser(username: string): Observable<User> {
    return this.http.get(`${URL}/users/${username}`)
      .pipe(
        map((data: User) => {
          return data;
        }));
  }
}

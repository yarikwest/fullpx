import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../interfaces';

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
    return this.http.get<User>(`${URL}/users/${username}`);
  }

  edit(user: User): Observable<User> {
    return this.http.put<User>(`${URL}/users/${user.id}`, user);
  }
}

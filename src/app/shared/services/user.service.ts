import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../interfaces';
import {environment} from '../../../environments/environment';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient
  ) {
  }

  getUser(username: string): Observable<User> {
    return this.http.get<User>(`${environment.apiUrl}/users/${username}`)
      .pipe(
        map((user: User) => {
          if (user.backgroundPhotoUrl === null) {
            user.backgroundPhotoUrl = 'assets/images/default_user_img.png';
          }
          return user;
        })
      );
  }

  edit(user: User): Observable<User> {
    return this.http.put<User>(`${environment.apiUrl}/users/${user.id}`, user);
  }
}

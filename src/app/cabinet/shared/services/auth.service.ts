import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable, Subject, throwError} from 'rxjs';
import {AuthResponse, LoginDataObject, SignUpDataObject} from '../../../shared/interfaces';
import {catchError, tap} from 'rxjs/operators';

const URL = 'http://localhost:8080';

@Injectable({providedIn: 'root'})
export class AuthService {

  public error$: Subject<string> = new Subject<string>();

  constructor(private http: HttpClient) {
  }

  login(user: LoginDataObject): Observable<any> {
    return this.http.post(`${URL}/cabinet/login`, user)
      .pipe(
        tap(this.setToken),
        catchError(this.handleError.bind(this))
      );
  }

  logout() {
    this.setToken(null);
  }

  signUp(user: SignUpDataObject): Observable<any> {
    return this.http.post(`${URL}/sign-up`, user)
      .pipe(
        catchError(this.handleError.bind(this))
      );
  }

  private handleError(error: HttpErrorResponse) {
    const object = error.error.object;
    this.error$.next(object);

    return throwError(error);
  }

  get token(): string {
    const expDate = new Date(localStorage.getItem('token-exp'));
    if (new Date() > expDate) {
      this.logout();
      return null;
    }
    return localStorage.getItem('token');
  }

  private setToken(response: AuthResponse | null) {
    if (response) {
      const expDate = new Date(response.expiresIn);
      localStorage.setItem('token', response.token);
      localStorage.setItem('token-exp', expDate.toString());
    } else {
      localStorage.clear();
    }
  }

  isAuthenticated(): boolean {
    return !!this.token;
  }
}

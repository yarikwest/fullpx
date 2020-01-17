import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Photo} from '../interfaces';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';

@Injectable()
export class PhotoService {

  constructor(
    private http: HttpClient
  ) {
  }

  getPhotosByCategory(category: string): Observable<Photo[]> {
    if (category === undefined) {
      category = 'all';
    }
    return this.http.get<Photo[]>(`${environment.apiUrl}/photos/category/${category}`);
  }

  getPhotosByUsername(username: string): Observable<Photo[]> {
    return this.http.get<Photo[]>(`${environment.apiUrl}/photos/user/${username}`);
  }

  getCategories(): Observable<string[]> {
    return this.http.get<string[]>(`${environment.apiUrl}/categories`);
  }

}

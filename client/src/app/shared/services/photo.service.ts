import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Photo} from '../interfaces';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {map} from 'rxjs/operators';

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
    return this.http.get<Photo[]>(`${environment.apiUrl}/photos/category/${category}`)
      .pipe(
        map(photos => {
          photos.forEach(photo => {
            photo.user.backgroundPhotoUrl = 'assets/images/default_user_img.png';
          });
          return photos;
        })
      );
  }

  getPhotosByUsername(username: string): Observable<Photo[]> {
    return this.http.get<Photo[]>(`${environment.apiUrl}/photos/user/${username}`)
      .pipe(
        map(photos => {
          photos.forEach(photo => {
            photo.user.backgroundPhotoUrl = 'assets/images/default_user_img.png';
          });
          return photos;
        })
      );
  }

  getCategories(): Observable<string[]> {
    return this.http.get<string[]>(`${environment.apiUrl}/categories`);
  }

}

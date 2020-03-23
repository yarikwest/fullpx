import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Album} from '../interfaces';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';

@Injectable()
export class AlbumService {

  constructor(
    private http: HttpClient
  ) {
  }

  createAlbum(album: Album): Observable<Album> {
    return this.http.post<Album>(`${environment.apiUrl}/albums`, album);
  }

  getAlbums(username: string): Observable<Album[]> {
    return this.http.get<Album[]>(`${environment.apiUrl}/albums/user/${username}`);
  }

  getAlbum(username: string, albumName: string): Observable<Album> {
    return this.http.get<Album>(`${environment.apiUrl}/photos/${username}/album/${albumName}`);
  }


}

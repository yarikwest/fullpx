import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Album, Photo} from '../interfaces';
import {of} from 'rxjs';

const URL = 'http://localhost:8080';

@Injectable()
export class PhotoService {

  photos: Photo[];
  album: Album;

  constructor(
    private http: HttpClient
  ) {
  }

  getPhotosByCategory(category: string) {
    if (category === undefined) {
      category = 'all';
    }
    return this.http.get<Array<Photo>>(`${URL}/photos/category/${category}`);
  }

  getPhotosByUsername(username: string) {
    return this.http.get<Photo[]>(`${URL}/photos/user/${username}`);
  }

  getPhotosByAlbum(username: string, albumName: string) {
    this.http.get<Album>(`${URL}/photos/${username}/album/${albumName}`).subscribe((album) => {
      album.photos[0].imageUrl = 'assets/images/alexander-abero-ale3D57gLxE-unsplash.jpg';
      album.photos[1].imageUrl = 'assets/images/alfred-kenneally-yHWzipvKSIA-unsplash.jpg';
      album.photos[2].imageUrl = 'assets/images/dead-angel-aFyD5aWKu6k-unsplash.jpg';
      album.photos[3].imageUrl = 'assets/images/dmitriy-frantsev-1SIQq3v5BC4-unsplash.jpg';
      album.photos[4].imageUrl = 'assets/images/ehud-neuhaus-XagHG25FKdA-unsplash.jpg';
      album.photos[5].imageUrl = 'assets/images/harley-davidson-kmTq5GU6c-0-unsplash.jpg';
      album.photos[6].imageUrl = 'assets/images/markus-spiske-cwK2_aHylGs-unsplash.jpg';
      album.photos[0].user.backgroundPhotoUrl = 'assets/images/User_Circle.png';
      album.photos[1].user.backgroundPhotoUrl = 'assets/images/User_Circle.png';
      album.photos[2].user.backgroundPhotoUrl = 'assets/images/User_Circle.png';
      album.photos[3].user.backgroundPhotoUrl = 'assets/images/User_Circle.png';
      album.photos[4].user.backgroundPhotoUrl = 'assets/images/User_Circle.png';
      album.photos[5].user.backgroundPhotoUrl = 'assets/images/User_Circle.png';
      album.photos[6].user.backgroundPhotoUrl = 'assets/images/User_Circle.png';
      this.album = album;
    });
    return of(this.album);
  }

  getCategories() {
    return this.http.get<Array<string>>(`${URL}/categories`);
  }

  getAlbums(username: string) {
    return this.http.get<Album[]>(`${URL}/albums/user/${username}`);
  }
}

import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Album} from './interfaces';
import {PhotoService} from './services/photo.service';
import {Observable} from 'rxjs';

@Injectable({providedIn: 'root'})
export class AlbumResolver implements Resolve<Album> {

  constructor(
    private photoService: PhotoService
  ) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Album> | Promise<Album> | Album {
    return this.photoService.getPhotosByAlbum(route.params.username, route.params.album);
  }

}

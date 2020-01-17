import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Album} from './interfaces';
import {Observable} from 'rxjs';
import {AlbumService} from './services/album.service';

@Injectable({providedIn: 'root'})
export class AlbumResolver implements Resolve<Album> {

  constructor(
    private albumService: AlbumService
  ) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Album> | Promise<Album> | Album {
    return this.albumService.getAlbum(route.params.username, route.params.album);
  }

}

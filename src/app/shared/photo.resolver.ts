import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Photo} from './interfaces';
import {Observable} from 'rxjs';
import {PhotoService} from './services/photo.service';

@Injectable({providedIn: 'root'})
export class PhotoResolver implements Resolve<Photo[]> {

  constructor(
    private photoService: PhotoService
  ) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Photo[]> | Promise<Photo[]> | Photo[] {
    return this.photoService.getPhotosByUsername(route.firstChild.params.username);
  }

}

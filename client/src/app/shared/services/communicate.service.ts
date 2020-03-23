import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {Photo, User} from '../interfaces';

@Injectable()
export class CommunicateService {
  private photosSource = new Subject<Photo[]>();
  private userSource = new Subject<User>();

  photos$ = this.photosSource.asObservable();
  user$ = this.userSource.asObservable();

  setPhotos(photos: Photo[]) {
    this.photosSource.next(photos);
  }

  setUser(user: User) {
    this.userSource.next(user);
  }
}

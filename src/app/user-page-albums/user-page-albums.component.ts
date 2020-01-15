import {Component, OnDestroy, OnInit} from '@angular/core';
import {Album, User} from '../shared/interfaces';
import {PhotoService} from '../shared/services/photo.service';
import {CommunicateService} from '../shared/services/communicate.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-user-page-albums',
  templateUrl: './user-page-albums.component.html',
  styleUrls: ['./user-page-albums.component.css']
})
export class UserPageAlbumsComponent implements OnInit, OnDestroy {

  user: User;
  albums: Album[] = [];
  sub: Subscription;

  constructor(
    private photoService: PhotoService,
    private communicateService: CommunicateService
  ) {
    this.sub = this.communicateService.user$.subscribe(user => this.user = user);
  }

  ngOnInit() {
    if (this.user) {
      this.photoService.getAlbums(this.user.username).subscribe(albums => {
        this.albums = albums;
      });
    }
  }

  ngOnDestroy(): void {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }
}

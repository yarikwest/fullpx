import {Component, OnDestroy, OnInit} from '@angular/core';
import {Album, User} from '../shared/interfaces';
import {CommunicateService} from '../shared/services/communicate.service';
import {Subscription} from 'rxjs';
import {AlbumService} from '../shared/services/album.service';

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
    private albumService: AlbumService,
    private communicateService: CommunicateService
  ) {
    this.sub = this.communicateService.user$.subscribe(user => this.user = user);
  }

  ngOnInit() {
    if (this.user) {
      this.albumService.getAlbums(this.user.username).subscribe(albums => {
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

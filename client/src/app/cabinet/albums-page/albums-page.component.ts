import {Component, ComponentFactoryResolver, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Album, Photo} from '../../shared/interfaces';
import {Subscription} from 'rxjs';
import {CommunicateService} from '../../shared/services/communicate.service';
import {AlbumCreatorComponent} from '../album-creator/album-creator.component';
import {RefDirective} from '../../shared/ref.directive';
import {AlbumService} from '../../shared/services/album.service';

@Component({
  selector: 'app-albums-page',
  templateUrl: './albums-page.component.html',
  styleUrls: ['./albums-page.component.css']
})
export class AlbumsPageComponent implements OnInit, OnDestroy {

  username = localStorage.getItem('username');
  albums: Album[] = [];
  photos: Photo[];
  sub: Subscription;
  @ViewChild(RefDirective, {static: false}) refDir: RefDirective;

  constructor(
    private albumService: AlbumService,
    private resolver: ComponentFactoryResolver,
    private communicateService: CommunicateService,
  ) {
    this.sub = communicateService.photos$.subscribe(photos => this.photos = photos);
  }

  ngOnInit() {
    this.albumService.getAlbums(this.username).subscribe(albums => {
      this.albums = albums;
    });
  }

  openModalCreator() {
    const modalFactory = this.resolver.resolveComponentFactory(AlbumCreatorComponent);
    this.refDir.containerRef.clear();
    const modal = this.refDir.containerRef.createComponent(modalFactory);
    modal.instance.photos = this.photos.filter(photo => photo.album === null || photo.album.trim() === '');
    modal.instance.close.subscribe(data => {
      if (data !== null) {
        this.albums.unshift(data);
      }
      this.refDir.containerRef.clear();
    });
  }

  ngOnDestroy(): void {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }
}

import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Album} from '../shared/interfaces';
import {AlbumService} from '../shared/services/album.service';

@Component({
  selector: 'app-album-page',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {
  album: Album;
  albumNameParam: string;

  constructor(
    private route: ActivatedRoute,
    private albumService: AlbumService,
  ) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.albumNameParam = params.album;
      this.albumService.getAlbum(localStorage.getItem('username'), this.albumNameParam).subscribe(album => this.album = album);
    });
  }

}

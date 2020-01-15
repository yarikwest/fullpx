import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Album} from '../shared/interfaces';

@Component({
  selector: 'app-album-page',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {
  album: Album;

  constructor(
    private route: ActivatedRoute,
  ) {
    this.route.data.subscribe(data => {
      this.album = data.album;
    });
  }

  ngOnInit() {
    console.log(this.album);
    // this.album.photos[0].imageUrl = 'assets/images/alexander-abero-ale3D57gLxE-unsplash.jpg';
    // this.album.photos[1].imageUrl = 'assets/images/alfred-kenneally-yHWzipvKSIA-unsplash.jpg';
    // this.album.photos[2].imageUrl = 'assets/images/dead-angel-aFyD5aWKu6k-unsplash.jpg';
    // this.album.photos[3].imageUrl = 'assets/images/dmitriy-frantsev-1SIQq3v5BC4-unsplash.jpg';
    // this.album.photos[4].imageUrl = 'assets/images/ehud-neuhaus-XagHG25FKdA-unsplash.jpg';
    // this.album.photos[5].imageUrl = 'assets/images/harley-davidson-kmTq5GU6c-0-unsplash.jpg';
    // this.album.photos[6].imageUrl = 'assets/images/markus-spiske-cwK2_aHylGs-unsplash.jpg';

  }

}

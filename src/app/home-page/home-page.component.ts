import {Component, OnInit} from '@angular/core';
import {Photo} from '../shared/interfaces';
import {PhotoService} from '../shared/services/photo.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  photos: Photo[] = [];

  constructor(
    private photoService: PhotoService
  ) {
  }

  ngOnInit() {
    this.photoService.getPhotosByCategory('all').subscribe(photos => {
      photos[0].imageUrl = 'assets/images/alexander-abero-ale3D57gLxE-unsplash.jpg';
      photos[1].imageUrl = 'assets/images/alfred-kenneally-yHWzipvKSIA-unsplash.jpg';
      photos[2].imageUrl = 'assets/images/dead-angel-aFyD5aWKu6k-unsplash.jpg';
      photos[3].imageUrl = 'assets/images/dmitriy-frantsev-1SIQq3v5BC4-unsplash.jpg';
      photos[4].imageUrl = 'assets/images/ehud-neuhaus-XagHG25FKdA-unsplash.jpg';
      photos[5].imageUrl = 'assets/images/harley-davidson-kmTq5GU6c-0-unsplash.jpg';
      photos[6].imageUrl = 'assets/images/markus-spiske-cwK2_aHylGs-unsplash.jpg';
      photos[0].user.backgroundPhotoUrl = 'assets/images/User_Circle.png';
      photos[1].user.backgroundPhotoUrl = 'assets/images/User_Circle.png';
      photos[2].user.backgroundPhotoUrl = 'assets/images/User_Circle.png';
      photos[3].user.backgroundPhotoUrl = 'assets/images/User_Circle.png';
      photos[4].user.backgroundPhotoUrl = 'assets/images/User_Circle.png';
      photos[5].user.backgroundPhotoUrl = 'assets/images/User_Circle.png';
      photos[6].user.backgroundPhotoUrl = 'assets/images/User_Circle.png';
      this.photos.push(photos[0]);
      this.photos.push(photos[1]);
      this.photos.push(photos[2]);
      this.photos.push(photos[3]);
      this.photos.push(photos[4]);
      this.photos.push(photos[5]);
      this.photos.push(photos[6]);
    });
  }

}

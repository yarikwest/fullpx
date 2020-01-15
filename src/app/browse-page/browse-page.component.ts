import {Component, OnInit} from '@angular/core';
import {PhotoService} from '../shared/services/photo.service';
import {Photo} from '../shared/interfaces';
import {ActivatedRoute, Params} from '@angular/router';

declare var M: any;

@Component({
  selector: 'app-browse-page',
  templateUrl: './browse-page.component.html',
  styleUrls: ['./browse-page.component.css']
})
export class BrowsePageComponent implements OnInit {

  categories: Array<string>;
  photos: Photo[] = [];
  categoryParam: string;

  constructor(
    private route: ActivatedRoute,
    private photoService: PhotoService
  ) {
  }

  ngOnInit() {
    M.AutoInit();
    this.photoService.getCategories().subscribe(categories => {
      this.categories = categories;
    });

    this.route.queryParams.subscribe((params: Params) => this.categoryParam = params.category);
    if (!this.categoryParam) {
      this.categoryParam = 'all';
    }

    this.getPhotos(this.categoryParam);
  }

  getPhotos(category) {
    this.photoService.getPhotosByCategory(category).subscribe(photos => {
      // this.photos = photos;
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

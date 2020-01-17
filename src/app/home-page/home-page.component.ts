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
      this.photos = photos;
    });
  }

}

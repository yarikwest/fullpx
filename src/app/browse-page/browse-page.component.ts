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
      this.photos = photos;
    });
  }
}

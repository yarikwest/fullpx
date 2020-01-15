import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {Photo} from '../shared/interfaces';
import {MzBaseModal} from 'ngx-materialize';

@Component({
  selector: 'app-photo-details',
  templateUrl: './photo-details.component.html',
  styleUrls: ['./photo-details.component.css']
})
export class PhotoDetailsComponent extends MzBaseModal {

  @Input() index = 0;
  @Input() photos: Photo[] = [];
  @Output() close = new EventEmitter<void>();

  previousPhoto() {
    if (this.index === 0) {
      this.index = this.photos.length - 1;
    } else {
      this.index = --this.index;
    }
  }

  nextPhoto() {
    if (this.index === this.photos.length - 1) {
      this.index = 0;
    } else {
      this.index = ++this.index;
    }
  }
}

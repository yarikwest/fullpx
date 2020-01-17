import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Album, Photo} from '../../shared/interfaces';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import {MzBaseModal} from 'ngx-materialize';
import {AlbumService} from '../../shared/services/album.service';

@Component({
  selector: 'app-album-creator',
  templateUrl: './album-creator.component.html',
  styleUrls: ['./album-creator.component.css']
})
export class AlbumCreatorComponent extends MzBaseModal implements OnInit {

  form: FormGroup;
  @Input() photos: Photo[];
  @Output() close = new EventEmitter<Album | null>();

  constructor(
    private albumService: AlbumService,
  ) {
    super();
  }

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      description: new FormControl(null, [Validators.maxLength(255)]),
      photos: new FormArray([])
    });
  }

  createAlbum() {
    if (this.form.invalid) {
      return;
    }

    const album: Album = {
      name: this.form.value.name,
      description: this.form.value.description,
      photos: this.photos.filter(photo => this.form.value.photos.indexOf(photo.id) !== -1)
    };

    this.albumService.createAlbum(album).subscribe(resp => {
      this.close.emit(resp);
    });
  }

  onCheckboxChange(e) {
    const checkArray: FormArray = this.form.get('photos') as FormArray;

    if (e.target.checked) {
      checkArray.push(new FormControl(+e.target.value));
    } else {
      let i = 0;
      checkArray.controls.forEach((item: FormControl) => {
        if (item.value === e.target.value) {
          checkArray.removeAt(i);
          return;
        }
        i++;
      });
    }
  }
}

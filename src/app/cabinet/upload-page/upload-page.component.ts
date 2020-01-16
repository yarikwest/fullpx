import {Component, OnInit} from '@angular/core';
import {UploadFileService} from '../shared/services/upload-file.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {PhotoService} from '../../shared/services/photo.service';

declare var M: any;

@Component({
  selector: 'app-upload-page',
  templateUrl: './upload-page.component.html',
  styleUrls: ['./upload-page.component.css']
})
export class UploadPageComponent implements OnInit {

  previewUrl: any = null;
  form: FormGroup;
  fileToUpload: File = null;
  categories: string[] = [];

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private photoService: PhotoService,
    private fileUploadService: UploadFileService,
  ) {
  }

  ngOnInit() {
    this.photoService.getCategories().subscribe(categories => this.categories = categories);

    this.form = this.formBuilder.group({
      file: new FormControl(null, [Validators.required]),
      filePath: new FormControl(),
      description: new FormControl(),
      categories: new FormControl()
    });
    setTimeout(() => {
      M.AutoInit();
    }, 500);
  }

  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
    this.preview();
  }

  uploadFileToActivity() {
    if (this.form.invalid) {
      return;
    }

    const formData: FormData = new FormData();
    formData.append('file', this.fileToUpload);
    formData.append('description', this.form.value.description);
    formData.append('categories', this.form.value.categories);

    this.fileUploadService.postFile(formData).subscribe(() => {
      this.form.reset();
      this.previewUrl = null;
    });
  }

  private preview() {
    if (this.fileToUpload == null) {
      return;
    }

    const mimeType = this.fileToUpload.type;
    if (mimeType.match(/image\/*/) == null) {
      return;
    }

    const reader = new FileReader();
    reader.readAsDataURL(this.fileToUpload);
    reader.onload = (_event) => {
      this.previewUrl = reader.result;
    };
  }
}

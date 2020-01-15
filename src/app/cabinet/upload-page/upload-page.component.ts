import {AfterViewInit, Component, OnInit} from '@angular/core';
import {UploadFileService} from '../shared/services/upload-file.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

declare var M: any;

@Component({
  selector: 'app-upload-page',
  templateUrl: './upload-page.component.html',
  styleUrls: ['./upload-page.component.css']
})
export class UploadPageComponent implements OnInit, AfterViewInit {

  previewUrl: any = null;
  form: FormGroup;
  fileToUpload: File = null;
  categories = ['nature', 'animals', 'travel', 'food', 'people'];

  constructor(
    private fileUploadService: UploadFileService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      file: new FormControl(null, [Validators.required]),
      description: new FormControl(null),
      categories: new FormControl()
    });
  }

  ngAfterViewInit(): void {
    M.AutoInit();
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
    });
  }

  private preview() {
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

import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FlexGalleryPipe} from '../flex-gallery.pipe';
import {PhotoService} from './services/photo.service';
import {GalleryComponent} from '../gallery/gallery.component';
import {PhotoDetailsComponent} from '../photo-details/photo-details.component';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {
  MzButtonModule,
  MzCardModule,
  MzIconModule,
  MzInputModule,
  MzModalModule,
  MzSelectModule,
  MzTabModule,
  MzTextareaModule,
} from 'ngx-materialize';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {UserService} from './services/user.service';
import {RefDirective} from './ref.directive';
import {CommunicateService} from './services/communicate.service';
import {FeedbackService} from './services/feedback.service';
import {MessageComponent} from '../message/message.component';
import {AlbumComponent} from '../album/album.component';
import {CommentComponent} from '../comment/comment.component';
import {AlbumCardComponent} from '../album-card/album-card.component';
import {AlbumService} from './services/album.service';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule,
    MzTabModule,
    MzModalModule,
    MzButtonModule,
    MzIconModule,
    MzCardModule,
    MzInputModule,
    MzSelectModule,
    MzTextareaModule,
  ],
  exports: [
    FormsModule,
    CommonModule,
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule,
    FlexGalleryPipe,
    MessageComponent,
    GalleryComponent,
    AlbumCardComponent,
    CommentComponent,
    PhotoDetailsComponent,
    MzTabModule,
    MzModalModule,
    MzButtonModule,
    MzIconModule,
    MzCardModule,
    MzInputModule,
    MzSelectModule,
    MzTextareaModule,
    RefDirective,
  ],
  providers: [
    UserService,
    PhotoService,
    AlbumService,
    FeedbackService,
    CommunicateService,
  ],
  declarations: [
    RefDirective,
    FlexGalleryPipe,
    AlbumComponent,
    AlbumCardComponent,
    GalleryComponent,
    MessageComponent,
    CommentComponent,
    PhotoDetailsComponent
  ],
  entryComponents: [
    MessageComponent,
    PhotoDetailsComponent,
  ]
})
export class SharedModule {

}

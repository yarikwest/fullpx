import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {CabinetLayoutComponent} from './components/cabinet-layout/cabinet-layout.component';
import {LoginPageComponent} from '../login-page/login-page.component';
import {DashboardPageComponent} from '../dashboard-page/dashboard-page.component';
import {UploadPageComponent} from '../upload-page/upload-page.component';
import {SharedModule} from '../../shared/shared.module';
import {AuthGuard} from './services/auth.guard';
import {GalleryComponent} from '../../gallery/gallery.component';
import {AlbumComponent} from '../../album/album.component';
import {AboutPageComponent} from '../about-page/about-page.component';
import {AlbumsPageComponent} from '../albums-page/albums-page.component';
import {FeedbackPageComponent} from '../feedback-page/feedback-page.component';
import {AlbumCreatorComponent} from '../album-creator/album-creator.component';


@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      {
        path: '', component: CabinetLayoutComponent, children: [
          {path: '', redirectTo: '/cabinet/login', pathMatch: 'full'},
          {path: 'login', component: LoginPageComponent},
          {path: 'upload', component: UploadPageComponent, canActivate: [AuthGuard]},
          {
            path: 'dashboard', component: DashboardPageComponent, canActivate: [AuthGuard], children: [
              {path: 'about', component: AboutPageComponent, canActivate: [AuthGuard]},
              {path: 'photos', component: GalleryComponent, canActivate: [AuthGuard]},
              {path: 'albums', component: AlbumsPageComponent, canActivate: [AuthGuard]},
              {path: 'albums/:album', component: AlbumComponent, canActivate: [AuthGuard]},
              {path: 'feedback', component: FeedbackPageComponent, canActivate: [AuthGuard]}
            ]
          },
        ]
      }
    ]),
  ],
  exports: [RouterModule],
  providers: [AuthGuard],
  declarations: [
    CabinetLayoutComponent,
    LoginPageComponent,
    UploadPageComponent,
    DashboardPageComponent,
    AboutPageComponent,
    AlbumsPageComponent,
    FeedbackPageComponent,
    AlbumCreatorComponent,
  ],
  entryComponents: [
    AlbumCreatorComponent,
  ]

})
export class CabinetModule {

}

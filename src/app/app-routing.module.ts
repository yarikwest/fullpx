import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {MainLayoutComponent} from './shared/components/main-layout/main-layout.component';
import {HomePageComponent} from './home-page/home-page.component';
import {BrowsePageComponent} from './browse-page/browse-page.component';
import {SignUpPageComponent} from './cabinet/sign-up-page/sign-up-page.component';
import {GalleryComponent} from './gallery/gallery.component';
import {UserPageComponent} from './user-page/user-page.component';
import {UserPageAboutComponent} from './user-page-about/user-page-about.component';
import {UserPageFeedbackComponent} from './user-page-feedback/user-page-feedback.component';
import {UserPageAlbumsComponent} from './user-page-albums/user-page-albums.component';
import {UserResolver} from './shared/user.resolver';
import {AlbumComponent} from './album/album.component';
import {PhotoResolver} from './shared/photo.resolver';
import {AlbumResolver} from './shared/album.resolver';


const routes: Routes = [
  {
    path: '', component: MainLayoutComponent, children: [
      {path: '', redirectTo: '/', pathMatch: 'full'},
      {path: '', component: HomePageComponent},
      {path: 'browse', component: BrowsePageComponent},
      {
        path: 'users', component: UserPageComponent, resolve: {user: UserResolver, photos: PhotoResolver}, children: [
          {path: '', redirectTo: '/', pathMatch: 'full'},
          {path: ':username/about', component: UserPageAboutComponent},
          {path: ':username/photos', component: GalleryComponent},
          {path: ':username/albums', component: UserPageAlbumsComponent},
          {path: ':username/feedback', component: UserPageFeedbackComponent},
          {path: ':username/albums/:album', component: AlbumComponent}
        ]
      }
    ]
  },
  {
    path: 'cabinet', loadChildren: './cabinet/shared/cabinet.module#CabinetModule'
  },
  {
    path: 'sign-up', component: SignUpPageComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

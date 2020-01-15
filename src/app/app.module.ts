import {BrowserModule} from '@angular/platform-browser';
import {NgModule, Provider} from '@angular/core';
import {HTTP_INTERCEPTORS} from '@angular/common/http';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MainLayoutComponent} from './shared/components/main-layout/main-layout.component';
import {HomePageComponent} from './home-page/home-page.component';
import {BrowsePageComponent} from './browse-page/browse-page.component';
import {SignUpPageComponent} from './cabinet/sign-up-page/sign-up-page.component';
import {SharedModule} from './shared/shared.module';
import {AuthInterceptor} from './shared/services/auth.interceptor';
import {UserPageComponent} from './user-page/user-page.component';
import {UserPageAboutComponent} from './user-page-about/user-page-about.component';
import {UserPageAlbumsComponent} from './user-page-albums/user-page-albums.component';
import {UserPageCommentsComponent} from './user-page-comments/user-page-comments.component';
import { AlbumCardComponent } from './album-card/album-card.component';
import { AlbumComponent } from './album/album.component';
import { CommentComponent } from './comment/comment.component';

const INTERCEPTOR_PROVIDER: Provider = {
  provide: HTTP_INTERCEPTORS,
  multi: true,
  useClass: AuthInterceptor
};

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
  ],
  exports: [],
  providers: [INTERCEPTOR_PROVIDER],
  declarations: [
    AppComponent,
    MainLayoutComponent,
    HomePageComponent,
    BrowsePageComponent,
    SignUpPageComponent,
    UserPageComponent,
    UserPageAboutComponent,
    UserPageAlbumsComponent,
    UserPageCommentsComponent,
    AlbumCardComponent,
    AlbumComponent,
    CommentComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

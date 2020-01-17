import {Component, DoCheck, OnInit} from '@angular/core';
import {Photo, User} from '../../shared/interfaces';
import {UserService} from '../../shared/services/user.service';
import {CommunicateService} from '../../shared/services/communicate.service';
import {PhotoService} from '../../shared/services/photo.service';

declare var M: any;

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.css']
})
export class DashboardPageComponent implements OnInit, DoCheck {

  user: User;
  photos: Photo[];

  constructor(
    private userService: UserService,
    private photoService: PhotoService,
    private communicateService: CommunicateService,
  ) {
  }

  ngOnInit(): void {
    this.userService.getUser(localStorage.getItem('username')).subscribe(user => this.user = user);
    this.photoService.getPhotosByUsername(localStorage.getItem('username')).subscribe(photos => this.photos = photos);
    this.communicateService.setUser(this.user);
    this.communicateService.setPhotos(this.photos);
    M.AutoInit();
  }

  ngDoCheck(): void {
    this.communicateService.setUser(this.user);
    this.communicateService.setPhotos(this.photos);
  }

}

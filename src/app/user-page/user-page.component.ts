import {Component, ComponentFactoryResolver, DoCheck, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Photo, User} from '../shared/interfaces';
import {CommunicateService} from '../shared/services/communicate.service';
import {MessageComponent} from '../message/message.component';
import {RefDirective} from '../shared/ref.directive';

declare var M: any;

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit, DoCheck {

  user: User;
  photos: Photo[] = [];
  @ViewChild(RefDirective, {static: false}) refDir: RefDirective;

  constructor(
    private route: ActivatedRoute,
    private resolver: ComponentFactoryResolver,
    private communicateService: CommunicateService,
  ) {
  }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.user = data.user;
      // if (this.user.backgroundPhotoUrl === null) {
      this.user.backgroundPhotoUrl = '../../assets/images/default_user_img.png';
      // }
      this.communicateService.setUser(this.user);

      data.photos[0].imageUrl = 'assets/images/alexander-abero-ale3D57gLxE-unsplash.jpg';
      data.photos[1].imageUrl = 'assets/images/alfred-kenneally-yHWzipvKSIA-unsplash.jpg';
      data.photos[2].imageUrl = 'assets/images/dead-angel-aFyD5aWKu6k-unsplash.jpg';
      data.photos[3].imageUrl = 'assets/images/dmitriy-frantsev-1SIQq3v5BC4-unsplash.jpg';
      data.photos[4].imageUrl = 'assets/images/ehud-neuhaus-XagHG25FKdA-unsplash.jpg';
      data.photos[5].imageUrl = 'assets/images/harley-davidson-kmTq5GU6c-0-unsplash.jpg';
      data.photos[6].imageUrl = 'assets/images/markus-spiske-cwK2_aHylGs-unsplash.jpg';
      data.photos[0].user.backgroundPhotoUrl = 'assets/images/User_Circle.png';
      data.photos[1].user.backgroundPhotoUrl = 'assets/images/User_Circle.png';
      data.photos[2].user.backgroundPhotoUrl = 'assets/images/User_Circle.png';
      data.photos[3].user.backgroundPhotoUrl = 'assets/images/User_Circle.png';
      data.photos[4].user.backgroundPhotoUrl = 'assets/images/User_Circle.png';
      data.photos[5].user.backgroundPhotoUrl = 'assets/images/User_Circle.png';
      data.photos[6].user.backgroundPhotoUrl = 'assets/images/User_Circle.png';
      this.photos.push(data.photos[0]);
      this.photos.push(data.photos[1]);
      this.photos.push(data.photos[2]);
      this.photos.push(data.photos[3]);
      this.photos.push(data.photos[4]);
      this.photos.push(data.photos[5]);
      this.photos.push(data.photos[6]);

      this.communicateService.setPhotos(this.photos);
      M.AutoInit();

    });
  }

  openMessageForm() {
    const modalFactory = this.resolver.resolveComponentFactory(MessageComponent);
    this.refDir.containerRef.clear();
    const modalForm = this.refDir.containerRef.createComponent(modalFactory);
    modalForm.instance.userEmail = this.user.email;
    modalForm.instance.close.subscribe(() => {
      this.refDir.containerRef.clear();
    });
  }

  ngDoCheck() {
    this.communicateService.setUser(this.user);
    this.communicateService.setPhotos(this.photos);
  }
}

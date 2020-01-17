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
      this.photos = data.photos;

      if (this.user.backgroundPhotoUrl === null) {
        this.user.backgroundPhotoUrl = '../../assets/images/default_user_img.png';
      }

      this.communicateService.setUser(this.user);
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

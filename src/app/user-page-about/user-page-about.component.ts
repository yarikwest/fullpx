import {Component, OnDestroy, OnInit} from '@angular/core';
import {User} from '../shared/interfaces';
import {CommunicateService} from '../shared/services/communicate.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-user-page-about',
  templateUrl: './user-page-about.component.html',
  styleUrls: ['./user-page-about.component.css']
})
export class UserPageAboutComponent implements OnInit, OnDestroy {

  user: User;
  sub: Subscription;

  constructor(
    private communicateService: CommunicateService
  ) {
  }

  ngOnInit() {
    this.sub = this.communicateService.user$.subscribe(user => this.user = user);
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}

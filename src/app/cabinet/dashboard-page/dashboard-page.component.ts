import {Component, DoCheck, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {User} from '../../shared/interfaces';
import {UserService} from '../../shared/services/user.service';
import {CommunicateService} from '../../shared/services/communicate.service';

declare var M: any;

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.css']
})
export class DashboardPageComponent implements OnInit, DoCheck {

  user: User;

  constructor(
    private userService: UserService,
    private communicateService: CommunicateService
  ) {
  }

  ngOnInit(): void {
    M.AutoInit();
    this.userService.getUser(localStorage.getItem('username')).subscribe(user => this.user = user);
    this.communicateService.setUser(this.user);
  }

  ngDoCheck(): void {
    this.communicateService.setUser(this.user);
  }


}

import { Component, OnInit } from '@angular/core';
import {User} from '../shared/interfaces';

@Component({
  selector: 'app-user-page-comments',
  templateUrl: './user-page-comments.component.html',
  styleUrls: ['./user-page-comments.component.css']
})
export class UserPageCommentsComponent implements OnInit {

  user: User;

  constructor() { }

  ngOnInit() {
  }

}

import {Component, Input, OnInit} from '@angular/core';
import {Feedback} from '../shared/interfaces';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  @Input() feedback: Feedback;

  constructor() {
  }

  ngOnInit() {
  }

}

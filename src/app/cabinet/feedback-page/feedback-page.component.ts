import {Component, OnInit} from '@angular/core';
import {Feedback} from '../../shared/interfaces';
import {FeedbackService} from '../../shared/services/feedback.service';

@Component({
  selector: 'app-feedback-page',
  templateUrl: './feedback-page.component.html',
  styleUrls: ['./feedback-page.component.css']
})
export class FeedbackPageComponent implements OnInit {

  feedbackList: Feedback[] = [];

  constructor(
    private feedbackService: FeedbackService,
  ) {
  }

  ngOnInit() {
    this.feedbackService.getFeedbackList(localStorage.getItem('username')).subscribe(feedback => this.feedbackList = feedback);
  }

}

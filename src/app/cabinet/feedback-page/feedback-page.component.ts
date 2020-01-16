import {Component, OnInit} from '@angular/core';
import {Feedback} from '../../shared/interfaces';
import {CommunicateService} from '../../shared/services/communicate.service';
import {FeedbackService} from '../../shared/services/feedback.service';

@Component({
  selector: 'app-feedback-page',
  templateUrl: './feedback-page.component.html',
  styleUrls: ['./feedback-page.component.css']
})
export class FeedbackPageComponent implements OnInit {

  username: string;
  feedbackList: Feedback[] = [];

  constructor(
    private feedbackService: FeedbackService,
    private communicateService: CommunicateService
  ) {
    communicateService.user$.subscribe(user => this.username = user.username);
  }

  ngOnInit() {
    this.feedbackService.getFeedbackList(this.username).subscribe(feedback => this.feedbackList = feedback);
  }

}

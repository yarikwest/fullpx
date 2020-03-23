import {Component, OnDestroy, OnInit} from '@angular/core';
import {Feedback, User} from '../shared/interfaces';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {FeedbackService} from '../shared/services/feedback.service';
import {CommunicateService} from '../shared/services/communicate.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-user-page-feedback',
  templateUrl: './user-page-feedback.component.html',
  styleUrls: ['./user-page-feedback.component.css']
})
export class UserPageFeedbackComponent implements OnInit, OnDestroy {

  user: User;
  feedbackList: Feedback[] = [];
  form: FormGroup;
  formVisible = false;
  sub: Subscription;

  constructor(
    private feedbackService: FeedbackService,
    private communicateService: CommunicateService
  ) {
    this.sub = communicateService.user$.subscribe(user => this.user = user);
  }

  ngOnInit() {
    this.feedbackService.getFeedbackList(this.user.username).subscribe((resp) => {
      this.feedbackList = resp;
    });

    this.form = new FormGroup({
        author: new FormControl(null, [Validators.required]),
        text: new FormControl(null, [Validators.required, Validators.maxLength(255)])
      }
    );
  }

  showCommentForm() {
    this.formVisible = !this.formVisible;
  }

  submit() {
    if (this.form.invalid) {
      return;
    }

    const feedback: Feedback = {
      author: this.form.value.author,
      text: this.form.value.text,
      username: this.user.username
    };

    this.feedbackService.addFeedback(feedback).subscribe(resp => {
      this.form.reset();
      this.formVisible = !this.formVisible;
      this.feedbackList.push(resp);
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}

import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Feedback} from '../interfaces';
import {Observable} from 'rxjs';

const URL = 'http://localhost:8080';


@Injectable()
export class FeedbackService {

  constructor(
    private http: HttpClient,
  ) {
  }

  addFeedback(feedback: Feedback) {
    return this.http.post<Feedback>(`${URL}/feedback`, feedback);
  }

  getFeedbackList(username: string): Observable<Feedback[]> {
    return this.http.get<Feedback[]>(`${URL}/feedback/${username}`);
  }
}

import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Feedback} from '../interfaces';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';

@Injectable()
export class FeedbackService {

  constructor(
    private http: HttpClient,
  ) {
  }

  addFeedback(feedback: Feedback): Observable<Feedback> {
    return this.http.post<Feedback>(`${environment.apiUrl}/feedback`, feedback);
  }

  getFeedbackList(username: string): Observable<Feedback[]> {
    return this.http.get<Feedback[]>(`${environment.apiUrl}/feedback/${username}`);
  }
}

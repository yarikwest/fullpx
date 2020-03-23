import {Component, OnDestroy, OnInit} from '@angular/core';
import {CommunicateService} from '../../shared/services/communicate.service';
import {User} from '../../shared/interfaces';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../../shared/services/user.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.css']
})
export class AboutPageComponent implements OnInit, OnDestroy {

  user: User;
  isVisible = false;
  form: FormGroup;
  sub: Subscription;

  constructor(
    private userService: UserService,
    private communicateService: CommunicateService
  ) {
    this.sub = communicateService.user$.subscribe(user => this.user = user);
  }

  ngOnInit() {
    this.form = new FormGroup({
      city: new FormControl(),
      phone: new FormControl(),
      description: new FormControl([Validators.maxLength(255)])
    });
  }

  toggleVisible() {
    this.form.controls.city.setValue(this.user.city);
    this.form.controls.phone.setValue(this.user.phone);
    this.form.controls.description.setValue(this.user.description);
    this.isVisible = !this.isVisible;
  }

  submit() {
    if (this.form.invalid) {
      return;
    }

    this.user.city = this.form.value.city;
    this.user.phone = this.form.value.phone;
    this.user.description = this.form.value.description;

    this.userService.edit(this.user).subscribe(user => {
      this.user = user;
      this.form.reset();
      this.isVisible = !this.isVisible;
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}

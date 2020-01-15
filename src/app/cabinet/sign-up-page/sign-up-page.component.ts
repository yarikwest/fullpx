import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../shared/services/auth.service';
import {Router} from '@angular/router';
import {SignUpDataObject} from '../../shared/interfaces';

@Component({
  selector: 'app-sign-up-page',
  templateUrl: './sign-up-page.component.html',
  styleUrls: ['./sign-up-page.component.css']
})
export class SignUpPageComponent implements OnInit {

  form: FormGroup;

  constructor(
    private auth: AuthService,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.form = new FormGroup({
      firstName: new FormControl(null, [Validators.required]),
      lastName: new FormControl(null, [Validators.required]),
      username: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(8)]),
      passwordConf: new FormControl(null, [Validators.required, Validators.minLength(8)])
    });
  }

  submit() {
    if (this.form.invalid) {
      return;
    }

    const user: SignUpDataObject = {
      firstName: this.form.value.firstName,
      lastName: this.form.value.lastName,
      username: this.form.value.username,
      email: this.form.value.email,
      password: this.form.value.password
    };

    this.auth.signUp(user).subscribe(() => {
      this.form.reset();
      this.router.navigate(['/cabinet', 'login']);
    });
  }
}

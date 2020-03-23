import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {User} from './interfaces';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {UserService} from './services/user.service';

@Injectable({providedIn: 'root'})
export class UserResolver implements Resolve<User> {

  constructor(
    private userService: UserService
  ) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<User> | Promise<User> | User {
    return this.userService.getUser(route.firstChild.params.username);
  }

}

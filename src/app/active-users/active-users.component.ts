import {Component} from '@angular/core';
import {UserModel, UsersService} from "../services/users.service";

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css'],
})
export class ActiveUsersComponent {
  constructor(private _usersService: UsersService) {
  }

  get users() {
    return this._usersService.users.filter(u => u.status === 'active');
  }

  setToInactive(user: UserModel) {
    user.status = 'inactive';

    this._usersService.update(user);
  }
}

import {Component} from '@angular/core';
import {UserModel, UsersService} from "../services/users.service";

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent {
  constructor(private _usersService: UsersService) {
  }

  get users() {
    return this._usersService.users.filter(u => u.status === 'inactive');
  }

  setToActive(user: UserModel) {
    user.status = 'active';

    this._usersService.update(user);
  }
}


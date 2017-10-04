import {Injectable} from '@angular/core';

export class UserModel {
  constructor(public id: number,
              public name: string,
              public status: string) {
  }

  static createInstance(name: string, status: string) {
    return new UserModel(Date.now(), name, status);
  }
}

@Injectable()
export class UsersService {
  constructor() {
  }

  private _users = {
    0: new UserModel(0, 'Max', 'active'),
    1: new UserModel(1, 'Anne', 'active'),
    2: new UserModel(2, 'Chris', 'inactive'),
    3: new UserModel(3, 'Manu', 'inactive'),
  };

  get users() {
    return Object.keys(this._users).map(k => this._users[k]);
  }

  add(name: string, status: string) {
    const user = UserModel.createInstance(name, status);

    this._users[user.id] = user;
  }

  update(user: UserModel) {
    this._users[user.id] = user;
  }

  getById(id: number) {
    return this._users[id];
  }
}

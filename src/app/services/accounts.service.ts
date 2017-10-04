import {Injectable} from '@angular/core';

export class AccountModel {
  id = Date.now();

  constructor(public name: string, public status: string) {
  }

  static createInstance(id: number, name: string, status: string) {
    let account = new AccountModel(name, status);

    account.id = id;

    return account;
  }
}

@Injectable()
export class AccountsService {
  private _accounts = {
    0: AccountModel.createInstance(0, 'Master Account', 'active'),
    1: AccountModel.createInstance(1, 'Testaccount', 'inactive'),
    2: AccountModel.createInstance(2, 'Hidden Account', 'unknown'),
  };

  get accounts() {
    return Object.keys(this._accounts).map(key => this._accounts[key]);
  }

  add(newAccount: AccountModel) {
    this._accounts[newAccount.id] = newAccount;
  }

  update(id: number, props: { [key: string]: any }) {
    for (let key of Object.keys(props)) {
      if (this._accounts[id].hasOwnProperty(key)) {
        this._accounts[id][key] = props[key];
      }
    }
  }
}

import {Component} from '@angular/core';
import {LoggingService} from "../services/logging.service";
import {AccountModel, AccountsService} from "../services/accounts.service";

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  providers: [LoggingService],
})
export class NewAccountComponent {
  constructor(private _logging: LoggingService, private _accountService: AccountsService) {

  }

  onCreateAccount(accountName: string, accountStatus: string) {
    this._accountService.add(new AccountModel(accountName, accountStatus));
    this._logging.log(accountStatus);
  }
}

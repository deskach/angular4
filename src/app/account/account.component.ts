import {Component, Input} from '@angular/core';
import {LoggingService} from "../services/logging.service";
import {AccountModel, AccountsService} from "../services/accounts.service";

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  providers: [LoggingService],
})
export class AccountComponent {
  @Input() account: AccountModel;
  @Input() id: number;

  constructor(private _loggin: LoggingService, private _accounts: AccountsService) {
  }

  onSetTo(status: string) {
    this._accounts.update(this.id, {status});
    this._loggin.log(status);
  }
}

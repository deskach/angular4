import {Component} from '@angular/core';
import {AccountsService} from "./services/accounts.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private _accoutsService: AccountsService) {

  }

  get accounts() {
    return this._accoutsService.accounts;
  }
}

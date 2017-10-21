import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  defaultSubscription = 'advanced';
  @ViewChild('f') _form: NgForm;

  _subscriptions = {
    0: { value: 'basic', description: 'Basic', id: 0 },
    1: { value: 'advanced', description: 'Advanced', id: 1 },
    2: { value: 'pro', description: 'Pro', id: 2 },
  };

  get subscriptions() {
    return Object.keys(this._subscriptions).map(k => this._subscriptions[k]);
  }

  onSubmit() {
    console.log(this._form);
  }

}

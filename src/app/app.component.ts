import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  hidden = false;
  clickItems = [];

  addClickedItem() {
    this.clickItems.push(Date.now());
    this.hidden = !this.hidden;
  }
}

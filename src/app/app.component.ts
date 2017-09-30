import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  evens: number[] = [];
  odds: number[] = [];

  onAdd(cntr) {
    (cntr % 2 === 0) ? this.evens.push(cntr) : this.odds.push(cntr);
  }

  onGameStart() {
    this.evens = [];
    this.odds = [];
  }
}

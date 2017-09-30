import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() start = new EventEmitter<void>();
  @Output() stop = new EventEmitter<void>();
  @Output() add = new EventEmitter<number>();

  private _counter = 0;
  private _ref = null;

  startGame() {
    this.stopGame();
    this.start.emit();
    this._ref = setInterval(_ => this.add.emit(this._counter++), 1000);
  }

  stopGame() {
    clearInterval(this._ref);
    this.stop.emit();
  }

  ngOnInit() {
  }
}

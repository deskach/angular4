import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {SECModel, SECModelType} from "../shared/server-element.model";

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<SECModel>();
  @Output() bluePrintCreated = new EventEmitter<SECModel>();
  newServerName = '';
  newServerContent = '';

  ngOnInit() {
  }

  onAddServer() {
    this.serverCreated.emit(new SECModel(SECModelType.SERVER, this.newServerName, this.newServerContent));
  }

  onAddBlueprint() {
    this.bluePrintCreated.emit(
      new SECModel(SECModelType.BLUE_PRINT, this.newServerName, this.newServerContent)
    );
  }
}

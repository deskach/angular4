import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {SECModel, SECModelType} from "../shared/server-element.model";

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<SECModel>();
  @Output() bluePrintCreated = new EventEmitter<SECModel>();

  @ViewChild('serverContentInput') serverContentInput: ElementRef; // references #serverContentInput from the view

  ngOnInit() {
  }

  onAddServer(nameInput: HTMLInputElement) {
    this.serverCreated.emit(new SECModel(SECModelType.SERVER, nameInput.value, this.serverContentInput.nativeElement.value));
  }

  onAddBlueprint(nameInput: HTMLInputElement) {
    this.bluePrintCreated.emit(
      new SECModel(SECModelType.BLUE_PRINT, nameInput.value, this.serverContentInput.nativeElement.value)
    );
  }
}

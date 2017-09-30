import { Component } from '@angular/core';
import {SECModel, SECModelType} from "./shared/server-element.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements: SECModel[] = [
    new SECModel(SECModelType.SERVER, 'testServer', 'test'),
  ];

  onServerInstanceAdded(serverData: SECModel) {
    this.serverElements.push(serverData);
  }

  onBlueprintAdded() {
    // this.serverElements.push({
    //   type: 'blueprint',
    //   name: this.newServerName,
    //   content: this.newServerContent
    // });
  }
}

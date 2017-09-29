import { Component } from '@angular/core';
import {SECModel} from "./shared/models";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements: SECModel[] = [
    new SECModel('server', 'testServer', 'test'),
  ];
}

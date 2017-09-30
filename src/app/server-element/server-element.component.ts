import {Component, Input, OnInit} from '@angular/core';
import {SECModel} from '../shared/server-element.model';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit {
  @Input() element: SECModel;

  ngOnInit() {
  }

}

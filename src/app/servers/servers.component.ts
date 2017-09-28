import {Component} from '@angular/core';

@Component({
  selector: 'app-servers',
  // selector: '[app-servers]',
  // selector: '.app-servers',
  // template: `
  //   <app-server></app-server>
  //   <app-server></app-server>
  // `,
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {
  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName = 'Test server';
  isServerCreated = false;
  servers = ['Test Server', 'Test server2'];

  constructor() {
    setTimeout(_ => this.allowNewServer = true, 2000);
  }

  onCreateServer() {
    this.serverCreationStatus = `Server ${this.serverName} was created!`;
    this.servers.push(this.serverName);
    this.isServerCreated = true;
  }

  onUpdateServerName(event: any) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}

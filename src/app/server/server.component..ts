import {Component} from "@angular/core";

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
})
export class ServerComponent {
  serverId = Math.ceil(Math.random() * 100);
  serverStatus = Math.random() > 0.5 ? 'offline' : 'online';

  getServerStatus() {
    return this.serverStatus;
  }
}

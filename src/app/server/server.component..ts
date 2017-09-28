import {Component} from "@angular/core";

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styles: [`
    .online {
      background-color: lightblue;
    }
  `],
})
export class ServerComponent {
  serverId = Math.ceil(Math.random() * 100);
  serverStatus = Math.random() > 0.5 ? 'offline' : 'online';

  getColor() {
    return this.serverStatus === 'online' ? 'green' : 'red';
  }
}

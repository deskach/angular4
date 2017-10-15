import {Component, OnInit} from '@angular/core';

import {ServersService} from '../servers.service';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {CanComponentDeactivate} from "./can-deactivate-guard.service";
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit, CanComponentDeactivate {
  server: { id: number, name: string, status: string };
  serverName = '';
  serverStatus = '';
  allowEdit = true;
  changesSaved = false;

  constructor(private serversService: ServersService, private _route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    const id = parseInt(this._route.snapshot.params['id']);
    this.server = this.serversService.getServer(id);

    this._route.queryParams.subscribe((queryParams: Params) => {
      if (typeof id === 'number') {
        this.server = this.serversService.getServer(id);
      }
    });

    this._route.fragment.subscribe();
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
  }

  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
    if (this.allowEdit && !this.changesSaved) {
      const {serverName: newName, serverStatus: newStatus} = this;
      const {name: oldName, status: oldStatus} = this.server;

      if (newName !== oldName || newStatus !== oldStatus) {
        if (confirm("Do you want to save changes?")) {
          this.updateServer();
        }
      }
    }

    return true;
  }

  updateServer() {
    this.serversService.updateServer(this.server.id, {
      name: this.serverName,
      status: this.serverStatus
    });

    this.changesSaved = true;
  }

  onUpdateServer() {
    this.updateServer();
    this.router.navigate(['../',], {relativeTo: this._route});
  }

}

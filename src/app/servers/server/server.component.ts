import {Component, OnInit} from '@angular/core';

import {ServersService} from '../servers.service';
import {ActivatedRoute, Params, Router} from "@angular/router";

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: { id: number, name: string, status: string };

  constructor(private serversService: ServersService,
              private _router: Router,
              private _route: ActivatedRoute) {
  }

  ngOnInit() {
    this.server = this.serversService.getServer(1);

    this._route.params.subscribe((params: Params) => {
      this.server = this.serversService.getServer(parseInt(params['id']));
    });
  }

  onEdit() {
    this._router.navigate(
      ['edit'],
      {
        relativeTo: this._route,
        queryParamsHandling: 'preserve'
      });
  }
}

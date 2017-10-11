import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _router: Router, private _activated: ActivatedRoute) {
  }

  ngOnInit() {
  }

  onServers() {
    this._router.navigate(['servers'], {relativeTo: this._activated});
  }
}

import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: { id: number, name: string } = {id: null, name: null};

  constructor(private _route: ActivatedRoute) {
  }

  ngOnInit() {
    const id = this._route.snapshot.params['id'];
    const name = this._route.snapshot.params['name'];

    if (id) {
      this.user = {id, name};
    }

    this._route.params.subscribe(params => {
      this.user.id = params['id'];
      this.user.name = params['name'];
    });
  }

}

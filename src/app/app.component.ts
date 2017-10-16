import { Component, OnInit } from '@angular/core';
import { UsersService } from './users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  id = null;

  constructor(private _usersService: UsersService) {
  }

  ngOnInit() {
    this._usersService.userActivated.subscribe((id: number) => {
      this.id = id;
    });
  }
}

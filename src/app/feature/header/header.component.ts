import { Component, OnInit } from '@angular/core';
import { UsersService } from "./../users/users.service";
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  menuToggle : boolean = false;
  usersLength$: Observable<number>;

  constructor(private usersService: UsersService) {
    this.usersLength$ = this.usersService.usersChanged.pipe(
      map(users => users.length)
    );
  }

  ngOnInit(): void {}

  handleToggle() {
    this.menuToggle = !this.menuToggle;
  }

}

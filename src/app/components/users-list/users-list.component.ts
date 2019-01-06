import { Component, OnInit } from '@angular/core';
import {User} from '../add-user/add-user.component';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  users: User[] = [];
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.users = this.userService.users;
  }
  edit(currentId) {
    this.userService.trigger.next(currentId);
  }
  delete(currentId) {
    this.userService.users.splice(currentId, 1);
  }
}

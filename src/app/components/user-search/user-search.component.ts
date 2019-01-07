import { Component, OnInit } from '@angular/core';
import {User} from '../add-user/add-user.component';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.css']
})
export class UserSearchComponent implements OnInit {

  searchStr = '';
  users: User[] = [];
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.users = this.userService.users;
  }

}

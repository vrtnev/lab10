import { Component, OnInit } from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../../services/user.service';
import index from '@angular/cli/lib/cli';

export interface User {
  name?: string;
  surname?: string;
  emails?: string[];
}

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  currentId = -10;
  addUser: FormGroup;
  users: User[] = [];
  constructor(private userService: UserService) {
    this.addUser = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      surname: new FormControl(null, [Validators.required]),
      emails: new FormArray([
        new FormControl(null, [Validators.required])
      ])
    });
  }

  ngOnInit() {
    this.userService.trigger.subscribe( data => {
      if (data !== -10) {
        this.currentId = data;
        this.addUser.patchValue({
          name: this.userService.users[this.currentId].name,
          surname: this.userService.users[this.currentId].surname,
          emails: this.userService.users[this.currentId].emails
        });
      }
    });
  }
  add() {
    if (this.currentId !== -10) {
      this.userService.users[this.currentId] = this.addUser.value;
      this.currentId = -10;
    } else {
      this.userService.users.push(this.addUser.value);
      this.addUser.reset();
    }
  }
  addEmail() {
    (<FormArray>this.addUser.controls['emails']).push(new FormControl(null, [Validators.required]));
  }
  deleteEmail(index) {
    (<FormArray>this.addUser.controls['emails']).removeAt(index);
  }
}

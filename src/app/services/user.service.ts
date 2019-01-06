import { Injectable } from '@angular/core';
import {User} from '../components/add-user/add-user.component';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users: User[] = [];
  trigger: BehaviorSubject<number>;
  constructor() {
    this.trigger = new BehaviorSubject<number>(-10);
  }
}

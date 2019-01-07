import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AddUserComponent} from '../components/add-user/add-user.component';
import {UsersListComponent} from '../components/users-list/users-list.component';
import {UserSearchComponent} from '../components/user-search/user-search.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'users',
    pathMatch: 'full'
  },
  {
    path: 'add',
    component: AddUserComponent
  },
  {
    path: 'search',
    component: UserSearchComponent
  },
  {
    path: 'users',
    component: UsersListComponent
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }

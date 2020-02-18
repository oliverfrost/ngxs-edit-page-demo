import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListUsersComponent } from './list-users/list-users.component';
import { ManageUserComponent } from './manage-user/manage-user.component';


const routes: Routes = [{
  path: 'users',
  component: ListUsersComponent
}, {
  path: 'users/:id',
  component: ManageUserComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

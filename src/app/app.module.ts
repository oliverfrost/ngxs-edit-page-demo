import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListUsersComponent } from './list-users/list-users.component';
import { ManageUserComponent } from './manage-user/manage-user.component';
import { NgxsModule } from '@ngxs/store';
import { UsersState } from './users.state';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ListUsersComponent,
    ManageUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgxsModule.forRoot([UsersState])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

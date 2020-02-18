import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { UsersState } from '../users.state';
import { Observable } from 'rxjs';
import { User } from '../user';
import { FetchUsersAction, SetActiveUserIdAction } from '../user.actions';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {
  @Select(UsersState.users)
  public users$: Observable<User[]>;

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.store.dispatch(new FetchUsersAction);
  }

  public onSelectUser(id: string) {
    this.store.dispatch(new SetActiveUserIdAction(id));
  }
}

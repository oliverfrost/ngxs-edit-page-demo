import { State, Action, StateContext, Selector, createSelector, NgxsOnInit } from "@ngxs/store";
import { User } from "./user";
import { UsersService } from "./users.service";
import { FetchUsersAction } from "./user.actions";
import { tap } from "rxjs/operators";

export interface UsersStateModel {
  users: User[];
  activeUserId: string;
}

@State<UsersStateModel>({
  name: "users",
  defaults: {
    users: null,
    activeUserId: null
  }
})
export class UsersState implements NgxsOnInit { 
  @Selector()
  static users(state: UsersStateModel) {
    return state.users;
  }

  @Selector()
  static activeUserId(state: UsersStateModel) {
    return state.activeUserId;
  }

  static getUserById(id: string) {
    return createSelector(
      [UsersState],
      (state: UsersStateModel) => state.users.find(u => u.id === id)
    )
  }

  constructor(private usersService: UsersService) {}

  ngxsOnInit(ctx: StateContext<UsersStateModel>) {
    ctx.dispatch(new FetchUsersAction());
  }

  @Action(FetchUsersAction)
  public fetchUsers(ctx: StateContext<UsersStateModel>) {
    return this.usersService.getAll$().pipe(
      tap(users =>
        ctx.patchState({
          users
        })
      )
    );
  }
}

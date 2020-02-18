import { User } from "./user";

export class FetchUsersAction {
  static readonly type = "FETCH_USERS";
}

export class SetActiveUserIdAction {
  static readonly type = "SET_ACTIVE_USER_ID";

  constructor(public id: string) {}
}

export class UpdateUserAction {
  static readonly type = "UPDATE_USER";

  constructor(public user: User) {}
}

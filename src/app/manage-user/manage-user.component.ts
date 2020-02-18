import { Component, OnInit, OnDestroy } from "@angular/core";
import { FormGroup, FormBuilder } from "@angular/forms";
import { Store, Select } from "@ngxs/store";
import { SetActiveUserIdAction, UpdateUserAction } from "../user.actions";
import { Observable } from "rxjs";
import { UsersState } from "../users.state";
import { User } from "../user";
import { ActivatedRoute } from "@angular/router";
import { take, filter } from "rxjs/operators";

@Component({
  selector: "app-manage-user",
  templateUrl: "./manage-user.component.html",
  styleUrls: ["./manage-user.component.css"]
})
export class ManageUserComponent implements OnInit, OnDestroy {
  public form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private store: Store,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params.id;

    this.form = this.fb.group({
      name: [null],
      lastname: [null],
      age: [null],
      company: [null]
    });

    this.store
      .select(UsersState.getUserById(id))
      .pipe(filter(Boolean))
      .subscribe(user => this.form.patchValue(user));
  }

  ngOnDestroy(): void {
    this.store.dispatch(new SetActiveUserIdAction(null));
  }

  public onSubmit(): void {
    this.store.dispatch(new UpdateUserAction(this.form.value));
  }
}

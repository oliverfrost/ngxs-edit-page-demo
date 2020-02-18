import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {delay} from 'rxjs/operators';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private users: User[] = [
    {
      id: '1',
      name: 'Jenny',
      lastname: 'Hollywell',
      age: 21,
      company: 'Google'
    },
    {
      id: '2',
      name: 'Markus',
      lastname: 'Pocus',
      age: 35,
      company: 'Facebook'
    },
    {
      id: '3',
      name: 'Garry',
      lastname: 'Potter',
      age: 16,
      company: 'Unemployed'
    }
  ];

  constructor() {

   }

   public getAll$(): Observable<User[]> {
     return of(this.users).pipe(delay(2000));
   }
}

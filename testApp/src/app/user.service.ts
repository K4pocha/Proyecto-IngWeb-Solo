import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private loggedInUser = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get<any[]>('/assets/users.json');
  }

  setLoggedIn(value: boolean): void {
    this.loggedInUser.next(value);
  }

  isLoggedIn(): BehaviorSubject<boolean> {
    return this.loggedInUser;
  }

}

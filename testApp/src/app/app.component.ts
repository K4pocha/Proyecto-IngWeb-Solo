import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  username$: Observable<string | null> = of(null);
  isLoggedIn = false;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.isLoggedIn().subscribe((loggedIn: boolean) => {
      this.isLoggedIn = loggedIn;
      if (loggedIn) {
        this.username$ = of();
      }
    });
  }

  logout(): void {
    this.userService.setLoggedIn(false); // Set the user as logged out
    this.username$ = of(null); // Reset the username
  }
}


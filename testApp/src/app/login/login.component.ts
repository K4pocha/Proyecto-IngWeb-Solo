import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  loginError: string = '';
  loginSuccess: string = '';
  isLoggedIn: boolean = false;

  constructor(private userService: UserService, private router: Router) {}

  login(): void {
    this.userService.getUsers().subscribe(
      (users: any[]) => {
        const foundUser = users.find((user: any) => user.username === this.username && user.password === this.password);

        if (foundUser) {
          this.loginError = ''; // Clear the login error message
          this.loginSuccess = 'Session initialized! Redirect in 5 seconds ...';
          this.userService.setLoggedIn(true);

          // Wait for 5 seconds
          setTimeout(() => {
            // Redirect to the main page
            this.router.navigate(['/']);
          }, 5000);
        } else {
          console.log('Invalid username or password');
          this.loginError = 'Invalid username or password';
        }
      },
      (error: any) => {
        console.error('Failed to retrieve user data:', error);
        this.loginError = 'Error retrieving user data';
      }
    );
  }
}

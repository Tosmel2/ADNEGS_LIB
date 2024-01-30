// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']
// })
// export class LoginComponent {

// }

import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  });

  errorMessage: string | undefined;

  constructor(private userService: UserService, private router: Router) {}

  onSubmit() {
    if (this.loginForm.valid) {
      const userData = {
        email: this.loginForm.get('email')?.value,
        password: this.loginForm.get('password')?.value
      };

      this.userService.loginUser(userData).subscribe(
        (response) => {
          // Handle successful login here
          console.log('Login successful', response);

          // Redirect to the dashboard component
          this.router.navigate(['/user-dashboard']);
        },
        (error) => {
          // Handle login error here
          console.error('Login error', error);
          // Assuming your API returns an error message, update errorMessage
          this.errorMessage = error.error.message || 'Invalid username or password';
        }
      );
    }
  }
}


// verify-email.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-verify-email',
  templateUrl: './verify-email.component.html',
  styleUrls: ['./verify-email.component.css'],
})
export class VerifyEmailComponent implements OnInit {
  token!: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const queryParams: Params = this.activatedRoute.snapshot.queryParams;
        // Access 'token' using ['token']
        this.token = queryParams['token'];

        const accessToken= localStorage.getItem('accessToken');
    // Check if the token is available
    if (this.token && accessToken) {

      // Call the verifyEmail method from the UserService to send a request
      this.userService.verifyEmail(this.token, accessToken).subscribe({
        next:(response:any) => {

          // Success callback function
          console.log('Email verified successfully', response);

          setTimeout(() => {
            this.router.navigate(['/registration-success']);
          }, 3000);
        
        },
        error:(error:any) => {
          // Error callback function
          console.error('Email verification failed', error);
          // Handle error, e.g., show an error message to the user
        }
    });
    this.resendVerificationEmail();
    } else {
      // Handle the case where the token is not available
      console.error('Token not found in query parameters');
    }
  }

  resendVerificationEmail() {
    const accessToken = localStorage.getItem('accessToken');

  if (!accessToken) {
    console.error('Access token not found in local storage');
    return;
  }
    // Call the resendEmail method from the UserService to send a request
    this.userService.resendEmail(accessToken).subscribe({
      next: (response: any) => {
        // Success callback function
        console.log('Email resent successfully', response);
        // Handle success, e.g., show a success message to the user
      },
      error: (error: any) => {
        // Error callback function
        console.error('Resending email failed', error);
        // Handle error, e.g., show an error message to the user
      },
    });
  }
}

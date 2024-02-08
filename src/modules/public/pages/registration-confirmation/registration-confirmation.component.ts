import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration-confirmation',
  templateUrl: './registration-confirmation.component.html',
  styleUrls: ['./registration-confirmation.component.css']
})
export class RegistrationConfirmationComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {
    // Navigate to '/dashboard' after 3 seconds
    setTimeout(() => {
      this.router.navigate(['/user-dashboard']);
    }, 3000);
  }
}

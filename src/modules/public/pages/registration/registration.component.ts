import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  registrationForm: FormGroup;

  errorMessage: string | undefined;
  successMessage: string | undefined;

  constructor(private http: HttpClient, private fb: FormBuilder, private userService: UserService, private router: Router) {
    this.registrationForm = this.fb.group({
      fullname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.setupPasswordToggle();
  }

  passwordVisible = false;
  passwordFieldType = 'password';

  private setupPasswordToggle(): void {
    const passwordInput = document.getElementById('password') as HTMLInputElement | null;
    const showPasswordIcon = document.getElementById('showPassword');
    const hidePasswordIcon = document.getElementById('hidePassword');

    if (!passwordInput || !showPasswordIcon || !hidePasswordIcon) {
      console.error('Element not found');
      return;
    }

    showPasswordIcon.addEventListener('click', () => {
      passwordInput.type = 'text';
      showPasswordIcon.classList.add('hidden');
      hidePasswordIcon.classList.remove('hidden');
    });

    hidePasswordIcon.addEventListener('click', () => {
      passwordInput.type = 'password';
      hidePasswordIcon.classList.add('hidden');
      showPasswordIcon.classList.remove('hidden');
    });
  }

  togglePasswordVisibility(): void {
    this.passwordVisible = !this.passwordVisible;
    this.passwordFieldType = this.passwordVisible ? 'text' : 'password';
  }

  submitRegistration(): void {
    if (this.registrationForm.valid) {
      const registrationData = this.registrationForm.value;
      this.userService.registerUser(registrationData)
        .subscribe(response => {
          console.log('Registration successful!', response);
          this.successMessage = 'Registration successful';

           // Display success message for 3 seconds
        setTimeout(() => {
          this.successMessage = undefined;
          this.router.navigate(['/login']);
        }, 3000);

          // this.router.navigate(['/login']);
          // Optionally, you can redirect the user or perform other actions after successful registration
        }, error => {
          console.error('Registration failed!', error);
          this.errorMessage = error.error.message || 'Invalid: Password should contain atleast one special character, uppercase, lowercase letters and number';
        });
    } else {
      // If the form is not valid, alert the user to fill in all required fields
      alert('Please fill in all required fields.');
    }
  }
}

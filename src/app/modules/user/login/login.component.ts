import { AfterViewChecked, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DialogService } from 'src/app/core/services/dialog.service';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, AfterViewChecked {

  loginForm!: FormGroup;
  inputType = 'password';
  loading = true;
  loadingButton = false;
  loginWithUser = false;

  constructor(
    private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService,
    private dialog: DialogService,
    private router: Router
  ) {
  }

  ngAfterViewChecked(): void {
    if (this.authenticationService.isAuthenticated()) {
        this.router.navigate(['/']);
      }
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: [null, Validators.required],
      password: [null, Validators.required]
    });
  }

  onSubmit(): void {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return
    }

    this.loginForm.disable();
    this.loadingButton = true;
    this.authenticationService.login(
      this.loginForm.get('username')?.value,
      this.loginForm.get('password')?.value).subscribe({
        next: (resp) => {
          this.router.navigate(['/']);
        },
        error: (error) => {
          this.dialog.alert(error?.error?.message || error);
          this.loginForm.enable();
          this.loadingButton = false;
        }
      });
  }

}

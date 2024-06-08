import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthProxyService } from 'src/app/proxy/auth-proxy/auth-proxy.service';
import { AccessTokenService } from 'src/app/shared/services/access-token.service';
import { emailIsValid } from 'src/app/shared/utils/is-valid-email';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
  loginForm!: FormGroup;
  showErrorMessage = false;

  constructor(
    private formBuilder: FormBuilder,
    private accessTokenService: AccessTokenService,
    private router: Router,
    private authProxyService: AuthProxyService
  ) {}

  ngOnInit(): void {
    this.setForm();
  }

  getFormProperty(property: string) {
    return this.loginForm.get(property);
  }

  setForm() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  logIn() {
    this.authProxyService.logIn(this.loginForm.value).subscribe(
      (res: any) => {
        this.accessTokenService.setToken(res.access_token);
        this.router.navigate(['/home']);
      },
      (err) => {
        this.showErrorMessage = true;
      }
    );
  }

  goToSigIn() {
    this.router.navigate(['sign-in']);
  }

  emailIsValid() {
    return emailIsValid(this.loginForm.value.username);
  }
}

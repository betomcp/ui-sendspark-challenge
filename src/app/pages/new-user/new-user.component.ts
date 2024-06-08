import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserProxyService } from 'src/app/proxy/user-proxy/user-proxy.service';
import { CreateUserDto } from 'src/app/shared/dto/new-user.dto';
import { AccessTokenService } from 'src/app/shared/services/access-token.service';
import { emailIsValid } from 'src/app/shared/utils/is-valid-email';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss'],
})
export class NewUserComponent implements OnInit {
  newUserForm!: FormGroup;
  errorMessage = '';

  constructor(
    private formBuilder: FormBuilder,
    private userProxyService: UserProxyService,
    private accessTokenService: AccessTokenService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.setForm();
  }

  setForm() {
    this.newUserForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      company: ['', Validators.required],
      jobTitle: [''],
      workEmail: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  getFormProperty(property: string) {
    return this.newUserForm.get(property);
  }

  emailIsValid() {
    return emailIsValid(this.newUserForm.value.workEmail);
  }

  saveData() {
    this.userProxyService.create(this.newUserForm.value).subscribe(
      (res: any) => {
        this.accessTokenService.setToken(res.access_token);
        this.router.navigate(['/home']);
      },
      (error) => {
        console.log(error);
        this.errorMessage = error.error.message[0];
      }
    );
  }
}

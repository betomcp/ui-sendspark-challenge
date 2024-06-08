import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccessTokenService } from 'src/app/shared/services/access-token.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  userName = '';

  constructor(
    private accessTokenService: AccessTokenService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.userName = this.accessTokenService.getPayload()['firstName'];
  }

  signOut() {
    this.accessTokenService.setToken('');
    this.router.navigate(['']);
  }
}

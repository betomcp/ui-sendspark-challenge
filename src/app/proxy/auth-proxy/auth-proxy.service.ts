import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiProxy } from '../api-proxy';

@Injectable({
  providedIn: 'root',
})
export class AuthProxyService extends ApiProxy {
  constructor(private httpService: HttpClient) {
    super();
  }

  logIn(logInDto: any) {
    return this.httpService.post(`${this.apiUrl}/auth/login`, logInDto);
  }
}

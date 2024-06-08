import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class AccessTokenService {
  constructor() {}

  setToken(token: string) {
    localStorage.setItem('sendspark-challenge@token', token);
  }

  getToken() {
    return localStorage.getItem('sendspark-challenge@token');
  }

  getPayload(): any {
    return jwtDecode(this.getToken() || '');
  }
}

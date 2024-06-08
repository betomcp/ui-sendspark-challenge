import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiProxy } from '../api-proxy';
import { CreateUserDto } from 'src/app/shared/dto/new-user.dto';

@Injectable({
  providedIn: 'root'
})
export class UserProxyService extends ApiProxy{

  constructor(private httpService: HttpClient) {
    super();
  }

  create(user: CreateUserDto) {
    return this.httpService.post(`${this.apiUrl}/user`, user);
  }
}

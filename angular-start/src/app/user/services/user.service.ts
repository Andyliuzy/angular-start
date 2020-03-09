import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  SERVER_URL = 'http://localhost:4200/api';

  constructor(private httpClient: HttpClient) {}

  getLoginUser() {
    return this.httpClient.get(`${this.SERVER_URL}/loginUser`);
  }
}

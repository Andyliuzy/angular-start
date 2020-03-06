import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CatService {
  SERVER_URL = 'http://localhost:4200/api';
  constructor(private httpClient: HttpClient) {}

  getCat() {
    return this.httpClient.get(`${this.SERVER_URL}/cats`);
  }
}

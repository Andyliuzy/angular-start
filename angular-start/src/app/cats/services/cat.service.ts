import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Cat } from '../models/cat.model';

@Injectable({
  providedIn: 'root'
})
export class CatService {
  SERVER_URL = 'http://localhost:4200/api';
  reloadNotify$: Subject<any> = new Subject<any>();
  constructor(private httpClient: HttpClient) {}

  getCat() {
    return this.httpClient.get(`${this.SERVER_URL}/cats`);
  }

  getCatById(id: string) {
    return this.httpClient.get(`${this.SERVER_URL}/cats/${id}`);
  }

  updateCat(cat: Cat) {
    console.log('---> update cat');
    return this.httpClient.put(`${this.SERVER_URL}/cats/${cat.id}`, cat, {
      observe: 'response'
    });
  }

  getAdoptedCats() {
    return this.httpClient
      .get(`${this.SERVER_URL}/cats`)
      .pipe(map((cats: Cat[]) => cats.filter(c => c.adopted)));
  }

  getSubscribedCats() {
    return this.httpClient
      .get(`${this.SERVER_URL}/cats`)
      .pipe(map((cats: Cat[]) => cats.filter(c => c.subscribed)));
  }

  notifyReload(value) {
    this.reloadNotify$.next(value);
  }
}

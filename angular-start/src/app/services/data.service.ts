import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { of } from 'rxjs';
import { Cat } from '../cats/models/cat.model';

@Injectable({
  providedIn: 'root'
})
export class DataService implements InMemoryDbService {
  constructor() {}

  createDb() {
    const cats: Cat[] = [
      {
        name: 'Tubs',
        src: '../../../assets/imgs/cats/tubs.jpg',
        age: '4 months',
        description:
          'I can be a bit shy at first but once I get comfortable with you I am super friendly and smoochy!',
        adopted: false
      },
      {
        name: 'Mouse',
        src: '../../../assets/imgs/cats/mouse.jpg',
        age: '4 month',
        description:
          'Handsome Hunter is an energetic boy who is looking for a home with someone who loves playing.',
        adopted: false
      },
      {
        name: 'Hunter',
        src: '../../../assets/imgs/cats/hunter.jpg',
        age: '3 years and 4 months',
        description:
          'He is got a bold personality and he would love a big house where he can explore.',
        adopted: false
      }
    ];
    return of({ cats });
  }
}

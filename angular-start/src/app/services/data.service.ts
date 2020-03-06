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
        id: '1067701',
        name: 'Tubs',
        src: '../../assets/imgs/cats/tubs.jpg',
        age: '4 months',
        description:
          'I can be a bit shy at first but once I get comfortable with you I am super friendly and smoochy!',
        adopted: false
      },
      {
        id: '1067702',
        name: 'Mouse',
        src: '../../assets/imgs/cats/mouse.jpg',
        age: '4 month',
        description:
          'Handsome Hunter is an energetic boy who is looking for a home with someone who loves playing.',
        adopted: false
      },
      {
        id: '1067703',
        name: 'Hunter',
        src: '../../assets/imgs/cats/hunter.jpg',
        age: '3 years and 4 months',
        description:
          'He is got a bold personality and he would love a big house where he can explore.',
        adopted: false
      },
      {
        id: '1067704',
        name: 'Birdie',
        src: '../../assets/imgs/cats/birdie.jpg',
        age: '1 year and 9 months',
        description:
          'Beautiful Birdie is ready to leave motherhood behind her and enjoy all the peace and quiet of a home where she is the only cat',
        adopted: false
      },
      {
        id: '1069525',
        name: 'Lydia',
        src: '../../assets/imgs/cats/lydia.jpg',
        age: '1 year and 2 months',
        description: '',
        adopted: false
      },
      {
        id: '1071933',
        name: 'Eric',
        src: '../../assets/imgs/cats/eric.jpg',
        age: '10 weeks',
        description: '',
        adopted: false
      }
    ];
    return of({ cats });
  }
}

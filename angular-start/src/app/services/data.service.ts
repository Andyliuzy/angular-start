import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { of } from 'rxjs';
import { Cat, Gender } from '../cats/models/cat.model';

@Injectable({
  providedIn: 'root'
})
export class DataService implements InMemoryDbService {
  constructor() {}

  createDb() {
    const cats: Cat[] = [
      {
        id: '1067701',
        breed: 'Domestic Short Hair (crossed)',
        gender: Gender.female,
        name: 'Tubs',
        src: '../../assets/imgs/cats/tubs.jpg',
        age: '4 months',
        description:
          'I can be a bit shy at first but once I get comfortable with you I am super friendly and smoochy!',
        adopted: false,
        fee: 125
      },
      {
        id: '1067702',
        breed: 'Domestic Short Hair (crossed)',
        gender: Gender.male,
        name: 'Mouse',
        src: '../../assets/imgs/cats/mouse.jpg',
        age: '4 month',
        description:
          'Handsome Hunter is an energetic boy who is looking for a home with someone who loves playing.',
        adopted: false,
        fee: 225
      },
      {
        id: '1067703',
        breed: 'Domestic Short Hair (crossed)',
        gender: Gender.female,
        name: 'Hunter',
        src: '../../assets/imgs/cats/hunter.jpg',
        age: '3 years and 4 months',
        description:
          // tslint:disable-next-line: max-line-length
          'Handsome Hunter is an energetic boy who is looking for a home with someone who loves playing, but preferably with no young kids as he is very excitable and loves playing rough. He is got a bold personality and he would love a big house where he can explore. He is confident and outgoing and not afraid to let you know his opinions. But mostly he is just after attention. If Hunter sounds like the guy for you, come down to the Cranbourne shelter and meet him. It might be the best thing you do.',
        adopted: false,
        fee: 60
      },
      {
        id: '1067704',
        breed: 'Domestic Short Hair (crossed)',
        gender: Gender.female,
        name: 'Birdie',
        src: '../../assets/imgs/cats/birdie.jpg',
        age: '1 year and 9 months',
        description:
          'Beautiful Birdie is ready to leave motherhood behind her and enjoy all the peace and quiet of a home where she is the only cat',
        adopted: false,
        fee: 125
      },
      {
        id: '1069525',
        breed: 'Domestic Short Hair (crossed)',
        gender: Gender.male,
        name: 'Lydia',
        src: '../../assets/imgs/cats/lydia.jpg',
        age: '1 year and 2 months',
        description: '',
        adopted: false,
        fee: 225
      },
      {
        id: '1071933',
        breed: 'Domestic Short Hair (crossed)',
        gender: Gender.male,
        name: 'Eric',
        src: '../../assets/imgs/cats/eric.jpg',
        age: '10 weeks',
        description: '',
        adopted: false,
        fee: 225
      }
    ];
    return of({ cats });
  }
}

import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { of } from 'rxjs';
import { Cat, Gender } from '../cats/models/cat.model';
import { User } from '../user/models/user.model';

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
        adopted: true,
        subscribed: false,
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
        subscribed: false,
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
        subscribed: false,
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
          // tslint:disable-next-line: max-line-length
          'Beautiful Birdie is ready to leave motherhood behind her and enjoy all the peace and quiet of a home where she is the only cat. She wants all the love for herself! This gorgeous girl is sweet and charming and always down for a chat. Like her name states, Birdie is ready to spread her wings and leave shelter life behind.',
        adopted: true,
        subscribed: false,
        fee: 125
      },
      {
        id: '1069525',
        breed: 'Domestic Short Hair (crossed)',
        gender: Gender.male,
        name: 'Lydia',
        src: '../../assets/imgs/cats/lydia.jpg',
        age: '1 year and 2 months',
        description:
          // tslint:disable-next-line: max-line-length
          'This beautiful 2 year old bonded pair have already found true love in each other and are now looking for a home and family to call their own. They are a delightful duo-friendly and outgoing and love nothing more than a cuddle and warm lap to sit on at the end of a hard day. As a bonded pair these relaxed kitties will be happy to spend their days keeping each other company and lazing around together if you work or study full time. Pop into our Cranbourne Adoption Facility and meet Sonny and Cher for yourself. After all, like your favourite Valentine day chocolates, two is always better than one!',
        adopted: false,
        subscribed: false,
        fee: 225
      },
      {
        id: '1071933',
        breed: 'Domestic Short Hair (crossed)',
        gender: Gender.male,
        name: 'Eric',
        src: '../../assets/imgs/cats/eric.jpg',
        age: '10 weeks',
        description:
          // tslint:disable-next-line: max-line-length
          'Scrumptious Sabrina is a super chilled out lady who is just as happy with her own company as she is with yours.She considers herself quiet the baker and you will always find her little paws making muffins for you. She is sweet, smoochy and just a little independent. Perfect for someone with a busy work or social life who just wants an easy going friend to come home to.',
        adopted: false,
        subscribed: false,
        fee: 225
      }
    ];
    const loginUser: User = {
      firstName: 'Andy',
      lastName: 'Liu',
      email: 'zhenyliu@gmail.com'
    };
    return of({ cats, loginUser });
  }
}

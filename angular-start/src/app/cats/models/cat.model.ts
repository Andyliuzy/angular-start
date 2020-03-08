export interface Cat {
  id: string;
  breed: string;
  gender: Gender;
  name: string;
  src: string;
  age: string;
  description: string;
  adopted: boolean;
  subscribed: boolean;
  fee: number;
}

export interface UpdateCat {
  type: string;
  cat: Cat;
}

export enum Gender {
  male = 'male',
  female = 'female'
}

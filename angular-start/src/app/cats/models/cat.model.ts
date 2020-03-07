export interface Cat {
  id: string;
  breed: string;
  gender: Gender;
  name: string;
  src: string;
  age: string;
  description: string;
  adopted: boolean;
  fee: number;
}

export enum Gender {
  male = 'male',
  female = 'female'
}

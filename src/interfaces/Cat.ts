import {RowDataPacket} from 'mysql2';
import {User} from './User';
import { type } from 'os';

  // TODO: create a cat interface
  // owner should be a User or a number
interface Cat {
  id?: number;
  cat_name: string;
  weight: number;
  age: number;
  owner: User | number;
  filename: string;
  birthdate: Date;
  coords: Location
  lat?: number; 
  lng?: number;
}

interface GetCat extends RowDataPacket, Cat {}

// TODO: create PostCat interface or type. Same as cat but without id
type PostCat = Omit<Cat, 'id'>;

// TODO: create PutCat interface or type. Sameas PostCat but properties are optional
type PutCat = Partial<PostCat>;

export {Cat, GetCat, PostCat, PutCat};

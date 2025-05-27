import { ChildEntity } from 'typeorm';
import { User } from './user.entity';

@ChildEntity()
export abstract class Client extends User {}

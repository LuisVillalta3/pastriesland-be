import { ChildEntity } from 'typeorm';
import { UserEntity } from './user.entity';

@ChildEntity()
export abstract class ClientEntity extends UserEntity {}

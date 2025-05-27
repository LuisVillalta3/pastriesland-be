import { ChildEntity, Column } from 'typeorm';
import { User } from './user.entity';

@ChildEntity()
export abstract class Admin extends User {
  @Column({ type: 'boolean', default: true })
  isActive: boolean;
}

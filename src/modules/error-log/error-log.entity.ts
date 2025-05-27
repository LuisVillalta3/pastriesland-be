import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class ErrorLog {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  message: string;

  @Column({ type: 'text' })
  stack: string;

  @Column({ type: 'text', nullable: true })
  payload?: string;

  @Column()
  url: string;

  @Column({ nullable: true })
  context?: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;
}

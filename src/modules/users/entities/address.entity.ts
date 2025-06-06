import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';
import { BaseEntity } from '@common/entities/base.entity';
import { ClientEntity } from '@modules/users/entities/client.entity';
import { OrderEntity } from '@modules/orders/entities/order.entity';

@Entity('addresses')
export class AddressEntity extends BaseEntity {
  @Column({ type: 'text' })
  address: string;

  @Column()
  addressName: string;

  @ManyToOne(() => ClientEntity, (user) => user.addresses, {
    onDelete: 'CASCADE',
  })
  user: ClientEntity;
}

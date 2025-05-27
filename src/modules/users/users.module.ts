import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Admin } from '@modules/users/entities/admin.entity';
import { Client } from '@modules/users/entities/client.entity';
import { AdminsService } from './services/admins.service';
import { AdminsController } from './controllers/admins.controller';
import { UsersController } from './controllers/users.controller';
import { UsersService } from './services/users.service';
import { ErrorLogModule } from '@modules/error-log/error-log.module';

@Module({
  imports: [TypeOrmModule.forFeature([User, Admin, Client]), ErrorLogModule],
  exports: [TypeOrmModule],
  providers: [AdminsService, UsersService],
  controllers: [AdminsController, UsersController],
})
export class UsersModule {}

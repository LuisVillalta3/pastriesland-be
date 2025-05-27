import { Module } from '@nestjs/common';
import { GlobalConfigModule } from './config/global-config.module';
import { DatabaseModule } from './database/database.module';
import { UsersModule } from './modules/users/users.module';

@Module({
  imports: [GlobalConfigModule, DatabaseModule, UsersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

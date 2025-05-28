import { Module } from '@nestjs/common';
import { GlobalConfigModule } from './config/global-config.module';
import { DatabaseModule } from './database/database.module';
import { UsersModule } from './modules/users/users.module';
import { AuthModule } from './modules/auth/auth.module';
import { ErrorLogModule } from './modules/error-log/error-log.module';
import { ProductsModule } from './modules/products/products.module';
import { CategoriesModule } from './modules/categories/categories.module';

@Module({
  imports: [
    GlobalConfigModule,
    DatabaseModule,
    UsersModule,
    AuthModule,
    ErrorLogModule,
    ProductsModule,
    CategoriesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

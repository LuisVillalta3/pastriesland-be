import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryEntity } from '@modules/categories/category.entity';
import { CategoriesService } from './categories.service';
import { AdminCategoriesController } from './controllers/admin-categories.controller';
import { ErrorLogModule } from '@modules/error-log/error-log.module';

@Module({
  imports: [TypeOrmModule.forFeature([CategoryEntity]), ErrorLogModule],
  exports: [TypeOrmModule],
  providers: [CategoriesService],
  controllers: [AdminCategoriesController],
})
export class CategoriesModule {}

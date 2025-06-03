import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductEntity } from '@modules/products/entities/product.entity';
import { ProductVariantEntity } from '@modules/products/entities/product-variant.entity';
import { ProductsService } from './products.service';
import { AdminProductsController } from './controllers/admin-products.controller';
import { ErrorLogModule } from '@modules/error-log/error-log.module';
import { ImageEntity } from '@modules/images/entities/image.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      ProductEntity,
      ProductVariantEntity,
      ImageEntity,
    ]),
    ErrorLogModule,
  ],
  exports: [TypeOrmModule],
  providers: [ProductsService],
  controllers: [AdminProductsController],
})
export class ProductsModule {}

import { Module } from '@nestjs/common';
import { ProductsController } from 'src/modules/products/product.controller';
import { ProductService } from 'src/modules/products/product.service';

@Module({
  controllers: [ProductsController],
  providers: [ProductService],
})
export class ProductModule {}

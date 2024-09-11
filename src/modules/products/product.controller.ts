import { Controller, Get } from '@nestjs/common';
import { ProductService } from './product.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  getProducts(): any {
    return this.productService.getProducts();
  }
}

import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductService {
  getProducts(): any {
    return [
      {
        id: 1,
        name: 'iPhone 15 Promax - 256 GB',
        price: 40000000,
      },
      {
        id: 2,
        name: 'Samsung Galaxy Egde',
        price: 35000000,
      },
    ];
  }
}

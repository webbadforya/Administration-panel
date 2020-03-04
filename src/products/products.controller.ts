import { ProductsService } from './products.service';
import { Controller, Post, Body, Put, Get } from '@nestjs/common';
import { Product } from './products.schema';

@Controller('')
export class ProductsController {
  constructor(public productService: ProductsService) {}

  @Put('addproduct')
  async createProduct(@Body() body: Product) {
    console.log(body);
    return await this.productService.createProduct(body);
  }
  @Get('showallproducts')
  async getProducts() {
    return await this.productService.getProducts();
  }
}

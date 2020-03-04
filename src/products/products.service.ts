import { Injectable, Inject } from '@nestjs/common';
import { Product } from './products.schema';
import { Model } from 'mongoose';

@Injectable()
export class ProductsService {
  constructor(
    @Inject('ProductsModelToken')
    private readonly productsModel: Model<Product>,
  ) {}
  // async createProduct(product) {
  //   return await this.productsModel.create(product);
  // }
  async getProducts() {
    return await this.productsModel.find({});
  }
  async numCheck(num) {
    return await this.productsModel.find({ productNumber: num });
  }
  async createProduct(prod) {
    let numberCheck = await !this.numCheck(prod.productNumber);
    if (!numberCheck) {
      return await this.productsModel.create(prod);
    } else return 'WRONG NUMBER';
  }
}

import * as mongoose from 'mongoose';

export const productSchema: any = new mongoose.Schema({
  productName: String,
  productNumber: Number,
});

export interface Product {
  productName: string;
  productNumber: number;
}

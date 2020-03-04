import { Connection, Document, Model } from 'mongoose';
import { productSchema } from './products.schema';

export const ProductsProvider: any = {
  provide: 'ProductsModelToken',
  useFactory: (connection: Connection): Model<Document> =>
    connection.model('ProductsModel', productSchema),
  inject: ['DbConnectionToken'],
};

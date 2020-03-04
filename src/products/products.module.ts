import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { Module } from '@nestjs/common';
import { ProductsProvider } from './products.provider';
import { DatabaseModule } from 'src/databases/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [ProductsController],
  providers: [ProductsService, ProductsProvider],
})
export class ProductsModule {}

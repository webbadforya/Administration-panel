import { Controller, Get, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('userdata')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('')
  sendData(@Body() body: { productName: any; productNumber: any }) {
    console.log(body);
    return body;
  }
}

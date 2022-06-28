import { Controller, Get, Post } from '@nestjs/common';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('app/todos')
  getData() {
    return this.appService.getData();
  }

  @Post('app/addTodo')
  addTodo() {
    return this.appService.addTodo();
  }
}

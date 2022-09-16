import { Controller, Get, Post } from '@nestjs/common';
import { map } from 'rxjs';

import { AppService } from './app.service';
import { ClashService } from './clash.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly clashService: ClashService
  ) {}

  @Get('app/todos')
  getData() {
    return this.appService.getData();
  }

  @Post('app/addTodo')
  addTodo() {
    return this.appService.addTodo();
  }

  @Get('app/proxies')
  getProxies() {
    return this.clashService.getProxies().pipe(
      map(response => response['data'])
    );
  }

  @Get('app/config')
  getConfig() {
    return this.clashService.getConfig().pipe(
      map(response => response['data'])
    );
  }

  @Get('app/yaml')
  getYaml() {
    return this.clashService.getYamlConfig();
  }

  @Post('app/yaml')
  setYaml(data) {
    console.log('data', data);
    return this.clashService.setYamlConfig(data);
  }
}

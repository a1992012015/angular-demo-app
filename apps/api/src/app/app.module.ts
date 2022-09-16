import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';

import { AppService } from './app.service';
import { ClashService } from './clash.service';
import { AppController } from './app.controller';

@Module({
  imports: [HttpModule],
  controllers: [AppController],
  providers: [AppService, ClashService]
})
export class AppModule {
}

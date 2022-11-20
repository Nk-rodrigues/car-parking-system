import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Parking } from './parking/parking.module';

@Module({
  imports: [Parking],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

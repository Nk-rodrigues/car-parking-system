import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Parking } from './parking/parking.module';
import { Slots } from './slots/slots.module';

@Module({
  imports: [Parking, Slots],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

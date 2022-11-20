import { Module } from '@nestjs/common';
import { SlotService } from './slots.service';
import { SlotController } from './slots.controller';
import { ParkingService } from 'src/parking/parking.service';

@Module({
  imports: [],
  controllers: [SlotController],
  providers: [SlotService, ParkingService],
})
export class Slots {}

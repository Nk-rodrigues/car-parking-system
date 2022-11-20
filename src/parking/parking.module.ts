import { Module } from '@nestjs/common';

import { ParkingController } from './parking.controller'; 
import { ParkingService } from './parking.service'; 

@Module({
  imports: [],
  controllers: [ParkingController],
  providers: [ParkingService],
})
export class Parking {}

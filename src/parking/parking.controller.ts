import { Controller, Post, Get, Header, Body, Patch } from '@nestjs/common';

import {ParkingService} from './parking.service'

@Controller('parking_lot')
export class ParkingController {
    constructor(private parkingService: ParkingService){}

    @Post()
    createParking(@Body() complete_body: {no_of_slot: number}) : any {
        return this.parkingService.setParking(complete_body.no_of_slot)
    }
    @Patch()
    addParking(@Body() complete_body: {increment_slot: number}) : any {
        return this.parkingService.extendParking(complete_body.increment_slot)
    }
}
    


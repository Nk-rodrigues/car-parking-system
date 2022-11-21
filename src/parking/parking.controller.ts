import { Controller, Post, Get, Header, Body, Patch } from '@nestjs/common';

import {ParkingService} from './parking.service'

@Controller()
export class ParkingController {
    constructor(private parkingService: ParkingService){}

    //Post request to initilize parking lot space
    @Post('parking_lot')
    createParking(@Body() req: {no_of_slot: number}) : {} {
        return this.parkingService.setParking(req.no_of_slot)
    }

    //Patch request to increase parking lot space
    @Patch('parking_lot')
    addParking(@Body() req: {increment_slot: number}) : {} {
        return this.parkingService.extendParking(req.increment_slot)
    }
    
}
    


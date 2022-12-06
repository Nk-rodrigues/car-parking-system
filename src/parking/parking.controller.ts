import { ParkingDTO, ParkingExtendDTO } from './parking.dto';
import { Controller, Post, Get, Header, Body, Patch } from '@nestjs/common';

import {ParkingService} from './parking.service'

@Controller()
export class ParkingController {
    constructor(private parkingService: ParkingService){}

    //Post request to initilize parking lot space
    @Post('parking_lot')
    createParking(@Body() dto: ParkingDTO) {
        return this.parkingService.setParking(dto.no_of_slot)
    }

    //Patch request to increase parking lot space
    @Patch('parking_lot')
    addParking(@Body() dto: ParkingExtendDTO) : {} {
        return this.parkingService.extendParking(dto.increment_slot)
    }
    
}
    


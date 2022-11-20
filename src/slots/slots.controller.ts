import { Controller, Post, Get, Header, Body, Patch } from '@nestjs/common';
import { SlotService } from './slots.service';

@Controller('park')
export class SlotController {
    constructor(private slotService: SlotService){}

    @Post()
    createParking(@Body() req: {
        car_reg_no: string,
        car_color: string,
        slotID: number
        }) : {} {
        return this.slotService.allocateSlot(req)
    }
}
    


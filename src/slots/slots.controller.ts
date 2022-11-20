import { Controller, Post, Get, Header, Body, Patch, Param } from '@nestjs/common';
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

    @Get('/registration_numbers/:color')
    getRegNo(@Param('color') color: string){
        return this.slotService.sameColorReg(color)
    }

    @Get('/slot_numbers/:color')
    getslotId(@Param('color') color: string){
        return this.slotService.sameColorId(color)
    }

}
    


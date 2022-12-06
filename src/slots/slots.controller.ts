import { Controller, Post, Get, Body, Param, Delete } from '@nestjs/common';
import { CustomValidation } from './slots.pipes';
import { SlotService } from './slots.service';

@Controller()
export class SlotController {
    constructor(private slotService: SlotService){}

    @Post('park')
    createParking(@Body() req: {
        car_reg_no: string,
        car_color: string
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

    @Get('status')
    getAllVehicle(){
        return this.slotService.getAllSlots()
    }

    @Delete('/clear')
    freeParkingSpace(@Body(new CustomValidation()) req: any){
        return this.slotService.freeSpace(req)
    }
}
    


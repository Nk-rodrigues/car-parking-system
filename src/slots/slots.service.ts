import { Injectable } from '@nestjs/common';
import { Slot } from './slots.model';
import { ParkingService } from 'src/parking/parking.service';

let vehicle = new Set<string>()
let used_slots = 0

@Injectable()
export class SlotService {

    private slots: Slot[] = []

    constructor(private parkingService: ParkingService){}

    allocateSlot(req: {car_reg_no: string, car_color: string, slotID: number}){
        if(vehicle.has(req.car_reg_no)){
            return 'exists' //throw error
        }
        let slot = this.parkingService.isSlotAvailable(used_slots)
        if(slot != -1){
            req.slotID = slot+1
            this.slots.push(req)
            return {"allocated_slot_number": slot+1}
        }
    }
}
import { HttpException, Injectable } from '@nestjs/common';
import { Slot } from './slots.model';
import { ParkingService } from 'src/parking/parking.service';
import {ArrayMultimap} from '@teppeis/multimaps'

let vehicle = new Set<string>()
let used_slots = 0
let colorMapReg = new ArrayMultimap<string, string>
let colorMapId = new ArrayMultimap<string, string>
@Injectable()
export class SlotService {

    private slots: Slot[] = []

    constructor(private parkingService: ParkingService){}

    allocateSlot(req: {car_reg_no: string, car_color: string, slotID: number}){
        if(vehicle.has(req.car_reg_no)){
            throw new HttpException("Vehicle already exists" , 400)
        }
        let slot = this.parkingService.isSlotAvailable(used_slots)
        if(slot != -1){
            req.slotID = slot+1
            this.slots.push(req)
            vehicle.add(req.car_reg_no)
            colorMapReg.put(req.car_color, req.car_reg_no) //map all the cars with a particular color
            colorMapId.put(req.car_color, req.slotID.toString())
            return {"allocated_slot_number": slot+1}
        }
        else {
            throw new HttpException("Parking lot is full" , 400)
        }
    }

    sameColorReg(color: string){
        return colorMapReg.get(color)
    }

    sameColorId(color: string){
        return colorMapId.get(color)
    }
}
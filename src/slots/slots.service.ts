import { HttpException, Injectable } from '@nestjs/common';
import { Slot } from './slots.model';
import { ParkingService } from 'src/parking/parking.service';

let vehicle = new Set<string>()
// let colorMapReg = new ArrayMultimap<string, string>
// let colorMapId = new ArrayMultimap<string, string>
let colorMapReg = new Map<string, string>
let colorMapId = new Map<string, string>

@Injectable()
export class SlotService {

    private slots: Slot[] = []

    constructor(private parkingService: ParkingService){}

    allocateSlot(req: {car_reg_no: string, car_color: string, slotID: number}){
        if(vehicle.has(req.car_reg_no)){
            throw new HttpException("Vehicle already exists" , 400)
        }

        let slot = this.parkingService.isSlotAvailable()
        if(slot != -1){
            req.slotID = slot+1
            this.slots.push(req)
            vehicle.add(req.car_reg_no)
            colorMapReg[req.car_color] = colorMapReg[req.car_color] ? colorMapReg[req.car_color]+req.car_reg_no+',' : req.car_reg_no+','
            colorMapId[req.car_color] = colorMapId[req.car_color] ? colorMapId[req.car_color]+req.slotID+',' : req.slotID+','
            // colorMapReg.put(req.car_color, req.car_reg_no) //map all the cars with a particular color
            // colorMapId.put(req.car_color, req.slotID.toString())
            return {"allocated_slot_number": slot+1}
        }
        else {
            throw new HttpException("Parking lot is full" , 400)
        }
    }

    sameColorReg(color: string) {
        let reg_num = colorMapReg[color]
        let reg_nums = reg_num.split(',').filter(ele => ele != "")
        return reg_nums
        // return colorMapReg.get(color)
    }

    sameColorId(color: string) {
        let id = colorMapId[color]
        let ids = id.split(',').filter(ele => ele != "")
        return ids
    }

    getAllSlots(){
        return this.slots
    }

    freeSpace(req: any) {
        if (req.slot_number) {
                if (this.parkingService.slotIdStatus) {
                    for(let i=0; i<this.slots.length; i++) {
                        if (req.slot_number == this.slots[i].slotID) {
                            colorMapReg[this.slots[i].car_color] = colorMapReg[this.slots[i].car_color].replace(this.slots[i].car_reg_no,'')
                            colorMapId[this.slots[i].car_color] = colorMapId[this.slots[i].car_color].replace(this.slots[i].slotID,'')
                            let freeSlot = this.slots[i].slotID
                            this.parkingService.freeSlot(freeSlot)
                            vehicle.delete(this.slots[i].car_reg_no)
                            this.slots.splice(i,1)
                            return {"freed_slot_number": freeSlot}
                        }
                    }
                }
                else {
                    throw new HttpException("Slot is already free or out of range" , 400)
                }
        }
        else {
            if (vehicle.has(req.car_registration_no)) {
                vehicle.delete(req.car_registration_no)
                for(let i=0; i<this.slots.length; i++) {
                    if (req.car_registration_no === this.slots[i].car_reg_no) {
                        colorMapReg[this.slots[i].car_color].replace(this.slots[i].car_reg_no,'')
                        colorMapId[this.slots[i].car_color].replace(this.slots[i].slotID,'')
                        let freeSlot = i+1
                        this.parkingService.freeSlot(freeSlot)
                        this.slots.splice(i,1)
                        return {"freed_slot_number": freeSlot}
                    }
                }
            }
            else {
                throw new HttpException("vehicle Registration number does not exists" , 400)
            }
        }
    }
}
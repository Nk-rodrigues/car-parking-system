import { Injectable } from '@nestjs/common';

let total_slot;
let available_slot = [] //Array to identify which slot is available

@Injectable()
export class ParkingService {

    //Handle parking lot space initialization
    setParking(no_of_slot: number) : {} {
        total_slot = no_of_slot
        available_slot = Array(total_slot).fill(1) 
        return {total_slot};
  }

    //Handle parking lot space increment
    extendParking(increment_slot: number) : {} {
        total_slot += increment_slot
        available_slot.length += increment_slot
        available_slot.fill(1,(total_slot-increment_slot), total_slot)
        return {total_slot};
    }

    //check if slots are available and return closest slot
    isSlotAvailable(used_slots: number) : number {
        if(used_slots<total_slot) {
            for (let i=0; i<available_slot.length; i++) {
                if(available_slot[i]==1) {
                    available_slot[i] = 0
                    return i;
                }
            } 
        }
        return -1
    }

}

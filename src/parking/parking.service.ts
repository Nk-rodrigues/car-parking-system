import { Injectable } from '@nestjs/common';
import { BinaryHeap } from '../priority_queue/priority_queue';

let total_slot;
let available_slot = [] //This Array is used to flag if a slot is empty or not
let nearestSlot = new BinaryHeap<number>( (x: number) => x) //This Binary Heap is used to get closest parking slot

@Injectable()
export class ParkingService {

    //Handle parking lot space initialization
    setParking(no_of_slot: number) : {} {
        total_slot = no_of_slot
        for(let i=0; i<total_slot; i++) {nearestSlot.push(i)}
        available_slot = Array(total_slot).fill(1)
        return {total_slot};
  }

    //Handle parking lot space increment
    extendParking(increment_slot: number) : {} {
        total_slot += increment_slot
        for(let i=nearestSlot.size(); i<total_slot; i++) {nearestSlot.push(i)}
        available_slot.length += increment_slot
        available_slot.fill(1,(total_slot-increment_slot), total_slot)
        return {total_slot};
    }

    //check if slots are available and return closest slot
    isSlotAvailable() : number {
        console.log(nearestSlot.size());
        console.log(total_slot);
        
        if(nearestSlot.size() <= total_slot && nearestSlot.size() > 0) {
            let id = nearestSlot.pop()
            available_slot[id] = 0
            return id
        }
        /*if(used_slots<total_slot) {
            for (let i=0; i<available_slot.length; i++) {
                if(available_slot[i]==1) {
                    available_slot[i] = 0
                    return i;
                }
            } 
        }*/
        return -1
    }

    //This function will check if a slot is empty
    slotIdStatus(slotId: number): boolean {
        if(slotId < total_slot) {
            if(available_slot[slotId-1] === 0) {
                return true
            }
        }
        return false
    }

    //This Function will add the slot back to Binary heap and flag it as available
    freeSlot(slotId: number): void {
        available_slot[slotId-1] = 1
        nearestSlot.push(slotId-1)
    }
}

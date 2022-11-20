import { Injectable } from '@nestjs/common';

import { Parking } from './parking.model';

let total_slot;

@Injectable()
export class ParkingService {
    setParking(no_of_slot: number) {
        total_slot = no_of_slot
        return {total_slot};
  }

    extendParking(increment_slot: number) {
        total_slot += increment_slot
        return {total_slot};
}
}

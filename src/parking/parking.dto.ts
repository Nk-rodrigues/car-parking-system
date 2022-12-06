import {isString, IsNotEmpty, IsNumber} from 'class-validator'

export class ParkingDTO {
    @IsNumber()
    @IsNotEmpty()
    no_of_slot: number;
}

export class ParkingExtendDTO {
    @IsNumber()
    @IsNotEmpty()
    increment_slot: number;
}
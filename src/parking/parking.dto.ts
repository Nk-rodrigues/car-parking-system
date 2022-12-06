import { IsNotEmpty, IsNumber, Min} from 'class-validator'

export class ParkingDTO {
    @IsNumber()
    @IsNotEmpty()
    @Min(1)
    no_of_slot: number;
}

export class ParkingExtendDTO {
    @IsNumber()
    @IsNotEmpty()
    @Min(1)
    increment_slot: number;
}
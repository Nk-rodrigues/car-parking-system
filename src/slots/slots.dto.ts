import { IsNotEmpty, IsNumber, IsString, Min, ValidateIf} from 'class-validator'

export class ParkDTO {
    @IsString()
    @IsNotEmpty()
    car_reg_no: string;
    
    @IsString()
    @IsNotEmpty()
    car_color: string;
}

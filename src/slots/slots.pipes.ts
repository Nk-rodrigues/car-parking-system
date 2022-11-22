import { PipeTransform, Injectable, ArgumentMetadata, HttpException } from '@nestjs/common';

@Injectable()
export class CustomValidation implements PipeTransform {
  transform(value: {slot_number: number, car_registration_no: string}, metadata: ArgumentMetadata) {

    if(value.slot_number && value.car_registration_no) {
        throw new HttpException("You must provide either slot_number or car_reg_no" , 400)
    }
    
    return value
  }
}
import {Test, TestingModule } from '@nestjs/testing';
import { Controller } from '@nestjs/common';
import { SlotController } from './slots.controller';
import { SlotService } from './slots.service';
import { ParkingController } from '../parking/parking.controller'; 
import { ParkingService } from '../parking/parking.service'; 

describe('SlotController', ()=> {
    let controller: SlotController

    const mockSlotService = {
        allocateSlot: jest.fn(
            ()=>{
                return {"allocated_slot_number": 1}
            }
        )
      };


    beforeEach(async ()=>{
        const module: TestingModule = await Test.createTestingModule({
            controllers: [SlotController, ParkingController],
            providers: [SlotService, ParkingService]
        }).overrideProvider(SlotService)
        .useValue(mockSlotService)
        .compile()

        controller = module.get<SlotController>(SlotController)
    })

    it('should be defined', ()=>{
        expect(controller).toBeDefined()
    })

    it('should create parking space', ()=>{
        expect(controller.createParking({"car_reg_no": "KA-101", "car_color": "red"})).toEqual({
            allocated_slot_number: expect.any(Number)
        })
    })


})
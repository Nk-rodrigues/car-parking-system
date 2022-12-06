import {Test, TestingModule } from '@nestjs/testing';
import { Controller } from '@nestjs/common';
import { ParkingController } from "./parking.controller";
import { ParkingService } from "./parking.service";

describe('ParkingController', ()=> {
    let controller: ParkingController

    beforeEach(async ()=>{
        const module: TestingModule = await Test.createTestingModule({
            controllers: [ParkingController],
            providers: [ParkingService]
        }).compile()

        controller = module.get<ParkingController>(ParkingController)
    })

    it('should be defined', ()=>{
        expect(controller).toBeDefined()
    })

    it('should allocate space', ()=>{
        expect(controller.createParking({"no_of_slot": 4})).toEqual({
            total_slot: expect.any(Number)
        })
    })

})
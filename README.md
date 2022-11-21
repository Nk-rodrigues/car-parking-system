# Parking System REST API application

This is a documentation of Parking lot API built using NestJS


## Install

    npm install

## Run the app

    npm run start:dev

# API

The API calls to the Parking System app is described below.

## Get list of all the cars in parking lot

### Request

`GET /status`

    http://localhost:3000/status

### Response example

    [ 
      {"slot_no":1,"registration_no":"KA-01-HH-1234","color":"red"},
      {"slot_no":2,"registration_no":"KA-01-HH-1235","color":"blue"},
      {"slot_no":4,"registration_no":"KA-01-HH-1236","color":"black"}
    ]

## Allocate total parking space

### Request

`POST /parking_lot`

    http://localhost:3000/parking_lot

### Request Body

    {"no_of_slot":9}

### Response example

    {"total_slot": 9}


## Increment parking lot space

### Request

`PATCH /parking_lot`

    http://localhost:3000/parking_lot

### Request Body

    {"increment_slot":3}

### Response example

    {"total_slot":9}


## Allocate a slot to vehicle

### Request

`POST /park`

    http://localhost:3000/park

### Request Body

    {
      "car_reg_no":"KA-01-AB-2211",
      "car_color":"white"
    }

### Response example

    {"allocated_slot_number":1}


## Fetch all the cars with a particular color.

### Request

`GET /registration_numbers/:color`

    http://localhost:3000/registration_numbers/white

### Response example

    [
      "KA-01-HH-1234",
      "KA-02-AB-9999",
      "KA-03-PK-2211"
    ]


## Fetch all the parking slots where a car of particular color is parked.

### Request

`GET /slot_numbers/:color`

    http://localhost:3000/slot_numbers/white

### Response example

    [
      "2",
      "7",
      "9"
    ]


## Allocate a slot to vehicle

### Request

`DELETE /clear`

    http://localhost:3000/clear

### Request Body

    {"slot_number":"1"}
# or
    {"car_registration_no":"KA-01-AB-2211"}

### Response example

    {"freed_slot_number":1}

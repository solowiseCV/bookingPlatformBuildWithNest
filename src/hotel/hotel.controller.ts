import { Controller, Get, Post, Body } from '@nestjs/common';
import { HotelService } from './hotel.service';
import { Hotel } from '../entity/hotel.entity';

@Controller('hotels') // Maps this controller to /hotels endpoint
export class HotelController {
  constructor(private readonly hotelService: HotelService) {}

  // Handle GET /hotels requests to fetch all hotels
  @Get()
  getAllHotels(): Promise<Hotel[]> {
    return this.hotelService.findAll();
  }

  // Handle POST /hotels requests to create a new hotel
  @Post()
  createHotel(@Body() hotelData: Partial<Hotel>): Promise<Hotel> {
    return this.hotelService.create(hotelData);
  }
}

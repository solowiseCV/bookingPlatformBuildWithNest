import { Controller, Get, Post, Body } from '@nestjs/common';
import { BookingService } from './booking.service';
import { Booking } from '../entity/booking.entity';

@Controller('bookings') // Maps this controller to /bookings endpoint
export class BookingController {
  constructor(private readonly bookingService: BookingService) {}

  // Handle GET /bookings requests to fetch all bookings
  @Get()
  getAllBookings(): Promise<Booking[]> {
    return this.bookingService.findAll();
  }

  // Handle POST /bookings requests to create a new booking
  @Post()
  createBooking(@Body() bookingData: Partial<Booking>): Promise<Booking> {
    return this.bookingService.create(bookingData);
  }
}

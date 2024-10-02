import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Booking } from '../entity/booking.entity';

@Injectable()
export class BookingService {
  constructor(
    @InjectRepository(Booking)
    private bookingRepository: Repository<Booking>,
  ) {}

  // Fetch all bookings
  findAll(): Promise<Booking[]> {
    return this.bookingRepository.find({ relations: ['hotel'] }); // Fetch bookings along with related hotels
  }

  // Create a new booking
  create(bookingData: Partial<Booking>): Promise<Booking> {
    const newBooking = this.bookingRepository.create(bookingData);
    return this.bookingRepository.save(newBooking);
  }
}

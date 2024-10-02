import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Hotel } from '../entity/hotel.entity';

@Injectable() // Marks the class as a provider that can be injected into other parts of the app
export class HotelService {
  constructor(
    @InjectRepository(Hotel) // Inject the hotel repository for interacting with the database
    private hotelRepository: Repository<Hotel>,
  ) {}

  // Fetch all hotels from the database
  findAll(): Promise<Hotel[]> {
    return this.hotelRepository.find();
  }

  // Create a new hotel
  create(hotelData: Partial<Hotel>): Promise<Hotel> {
    const newHotel = this.hotelRepository.create(hotelData); // Create a new instance of Hotel entity
    return this.hotelRepository.save(newHotel); // Save the new hotel to the database
  }
}

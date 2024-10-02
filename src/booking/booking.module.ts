import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Booking } from '../entity/booking.entity';
import { BookingService } from './booking.service';
import { Hotel } from '../entity/hotel.entity';
import { BookingController } from './booking.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Booking, Hotel])], 
  controllers: [BookingController],
  providers: [BookingService],
})
export class BookingModule {}

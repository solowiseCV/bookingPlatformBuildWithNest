

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Hotel } from '../entity/hotel.entity';
import { HotelController } from './hotel.controller';
import { HotelService } from './hotel.service';

@Module({
  imports: [TypeOrmModule.forFeature([Hotel])], // Register the Hotel entity with TypeORM
  controllers: [HotelController],
  providers: [HotelService],
})
export class HotelModule {}
